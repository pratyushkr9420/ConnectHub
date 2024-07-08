import { generateClient } from "aws-amplify/api";
import { createPost, deletePost, updatePost } from "../graphql/mutations";
import { CreatePostInput, Post, User } from "../API";
import { CustomAuthUser, UserFromDb } from "./types";
import { Alert } from "react-native";

const client = generateClient();

export const createNewPostInDb = async (newPostContent: string, currentLoggedInUser: CustomAuthUser): Promise< Post | undefined>=> {
    try {
        const response = await client.graphql({
          query: createPost,
          variables: {
              input: {
                  content: newPostContent,
                  postAuthorId: currentLoggedInUser.userId,
                  numberOfLikes: 0,
                  likedBy: [],
              },
          },
        });
        console.log("New Post saved to database");
        return response.data.createPost;
      } catch (e) {
        console.log("Error while adding this new post to database:", e);
      }
}

export const deletePostInDb = async(postToDelete: Post) => {
    try {
        const response = await client.graphql({
          query: deletePost,
          variables: {
              input: {
                  id: postToDelete.id
              },
          },
        });
        console.log("Post deleted from database");
      } catch (e) {
        console.log("Error while deleting this post from database:", e);
      }
}

export const incrementLikesInPostInDb = async (postToUpdate: Post, prevLikedBy:  (string | null)[] | null | undefined, prevnumberOfLikes: number | null | undefined, userWhoLiked: UserFromDb) => {
  try {
    if (typeof prevnumberOfLikes === "number") {
      const response = await client.graphql({
        query: updatePost,
        variables: {
          input: {
            id: postToUpdate.id,
            likedBy: prevLikedBy!.concat([userWhoLiked.id]),
            numberOfLikes: prevnumberOfLikes + 1,
          },
        },
      });
    }
    console.log("Post liked successfully")
  } catch (e) {
    console.log("Error adding like to post in the database:", e);
  }
}

export const decrementLikesInPostInDb = async (postToUpdate: Post, prevLikedBy:  (string | null)[] | null | undefined, prevnumberOfLikes: number | null | undefined, userWhoDisLiked: UserFromDb) => {
  try {
    if (typeof prevnumberOfLikes === "number") {
      const response = await client.graphql({
        query: updatePost,
        variables: {
          input: {
            id: postToUpdate.id,
            likedBy: prevLikedBy!.filter(id => id !== userWhoDisLiked.id),
            numberOfLikes: prevnumberOfLikes - 1,
          },
        },
      });
    }
    console.log("Post disliked successfully")
  } catch (e) {
    console.log("Error removing like from the post in the database:", e);
  }
}
