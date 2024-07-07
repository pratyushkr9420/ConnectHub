import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { ModelSortDirection, Post } from "../API";
import { generateClient } from "aws-amplify/api";
import { postsByDate } from "../graphql/queries";
import { Alert } from "react-native";

type PostsContextType = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    loadingPosts: boolean;
    fetchPosts: () => Promise<void>;
    fetchAdditionalPosts: () => Promise<void>;
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
            variables: { type: "Post", sortDirection: ModelSortDirection.DESC, limit: 50 },
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
              variables: { type: "Post", sortDirection: ModelSortDirection.DESC, limit: 50, nextToken},
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
    return (
        <PostsContext.Provider value={{
            posts,
            setPosts,
            loadingPosts,
            fetchPosts,
            fetchAdditionalPosts,
        }}>
            {children}
        </PostsContext.Provider>)
}

export { PostsProvider, usePostsContext };
