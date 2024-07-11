import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { ModelSortDirection, Post, User } from "../API";
import { generateClient } from "aws-amplify/api";
import { postsByDate } from "../graphql/queries";
import { Alert } from "react-native";
import { CustomAuthUser, UserFromDb } from "../utils/types";
import { createNewPostInDb, deletePostInDb, incrementLikesInPostInDb, decrementLikesInPostInDb  } from "../utils/postFunctions";

type PostsContextType = {
    posts: Post[];
    newPostContent: string;
    setNewPostContent: React.Dispatch<React.SetStateAction<string>>;
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    loadingPosts: boolean;
    fetchPosts: () => Promise<void>;
    fetchAdditionalPosts: () => Promise<void>;
    publishNewPost: (currentLoggedInUser: CustomAuthUser) => Promise<void>;
    removePost: (postToDelete: Post) => Promise<void>;
    incrementLikesOnPost: (postToUpdate: Post, userWhoLiked: UserFromDb) => Promise<void>;
    decrementLikesOnPost: (postToUpdate: Post, userWhoDisLiked: UserFromDb) => Promise<void>
};

const client = generateClient();

const PostsContext = createContext<PostsContextType | undefined>(undefined);

function usePostsContext() {
    const context = useContext(PostsContext);
    if (context === undefined) {
      throw new Error("usePostsContext must be used within a PostsProvider");
    }
    return context;
}

function PostsProvider({ children }: { children: ReactNode }): ReactElement {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [nextToken, setNextToken] = useState<string | null | undefined>(null);
    const [loadingPosts, setIsLoadingPosts] = useState<boolean>(false);
    
    useEffect(() => {
        fetchPosts();
      }, []);

    const fetchPosts = async () => {
        setIsLoadingPosts(true);
        try {
          const response = await client.graphql({
            query: postsByDate,
            variables: { type: "Post", sortDirection: ModelSortDirection.DESC, limit: 100 },
          });
          setPosts(response.data.postsByDate.items);
          setIsLoadingPosts(false);
          setNextToken(response.data.postsByDate.nextToken);
        } catch (e) {
          console.log("Error fetching posts");
          setIsLoadingPosts(false);
        }
      };
    
    const fetchAdditionalPosts = async () => {
      if (nextToken) {
        setIsLoadingPosts(true);
        try {
          const response = await client.graphql({
            query: postsByDate,
            variables: { type: "Post", sortDirection: ModelSortDirection.DESC, limit: 100, nextToken},
          });
          setPosts((prev) => [...prev, ...response.data.postsByDate.items]);
          setNextToken(response.data.postsByDate.nextToken);
          setIsLoadingPosts(false);
        } catch (e) {
          console.log("Error fetching additional posts");
          setIsLoadingPosts(false);
        }
      } else {
        Alert.alert("No more posts to load");
      }
    }
    
    const addPost = async (newPost: Post) => {
      setPosts(prev => [newPost,...prev]);
    }
    
    const deletePost = async (postToDelete: Post) => {
      setPosts(posts.filter(post => post.id !== postToDelete.id));
    }
  
  const incrementLikesForPost = (postToUpdate: Post, userWhoLiked: UserFromDb) => {
    const newPosts = posts.map((post) => {
      if (post.id === postToUpdate.id) {
        if (typeof post.numberOfLikes === "number") {
          post.numberOfLikes += 1;
        }
        post.likedBy = post.likedBy?.concat([userWhoLiked.id])
      }
      return post
    })
    setPosts(newPosts);
  }
  
    const decrementLikesForPost = (postToUpdate: Post, userWhoDisLiked: UserFromDb) => {
      setPosts(posts.map(post => {
        if (post.id === postToUpdate.id) {
          if (post.numberOfLikes) {
            post.numberOfLikes -= 1;
          }
          if (post.likedBy) {
            post.likedBy = post.likedBy.filter(id => id !== userWhoDisLiked.id);
          }
        }
        return post;
      }))
    }
  
    const publishNewPost = async (currentLoggedInUser: CustomAuthUser) => {
      if (newPostContent.trim().length == 0) {
        Alert.alert("Cannot make an empty post")
        return
      }
      try {
        const newPost = await createNewPostInDb(newPostContent, currentLoggedInUser)
        if (newPost) {
          addPost(newPost);
        }
        setNewPostContent("");
      } catch (e) {
        console.log("Error adding new post to database");
      }

    }
  
    const removePost = async (postToDelete: Post) => {
      deletePost(postToDelete);
      await deletePostInDb(postToDelete);
    }
  
    const incrementLikesOnPost = async (postToUpdate: Post, userWhoLiked: UserFromDb) => {
      await incrementLikesInPostInDb(postToUpdate, postToUpdate.likedBy, postToUpdate.numberOfLikes, userWhoLiked);
      incrementLikesForPost(postToUpdate, userWhoLiked);
    }

    const decrementLikesOnPost = async (postToUpdate: Post, userWhoDisLiked: UserFromDb) => {
      await decrementLikesInPostInDb(postToUpdate, postToUpdate.likedBy, postToUpdate.numberOfLikes, userWhoDisLiked);
      decrementLikesForPost(postToUpdate, userWhoDisLiked);
    }
    
    return (
        <PostsContext.Provider value={{
          posts,
          newPostContent,
            setNewPostContent,
            setPosts,
            loadingPosts,
            fetchPosts,
            fetchAdditionalPosts,
            publishNewPost,
            removePost,
            incrementLikesOnPost,
            decrementLikesOnPost
        }}>
            {children}
        </PostsContext.Provider>)
}

export { PostsProvider, usePostsContext };
