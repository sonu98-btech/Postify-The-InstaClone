import { useContext } from "react";
import { FollowContext } from "../followContext";
import {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
  getSuggestedUsers,
} from "../services/follow.api";

export const useFollow = () => {
  const {
    followers,
    setFollowers,
    following,
    setFollowing,
    suggestedUsers,
    setSuggestedUsers,
    loading,
    setLoading,
    suggestedLoading,
    setSuggestedLoading,
  } = useContext(FollowContext);

  const followUserHandler = async (userId) => {
    try {
      const data = await followUser(userId);
      console.log("Follow response:", data);
      // Refetch following list after following a user
      const updatedData = await getFollowing();
      console.log("Updated following list:", updatedData);
      setFollowing(updatedData.following);
      return data;
    } catch (error) {
      console.error("Failed to follow user:", error);
      throw error;
    }
  };

  const unfollowUserHandler = async (userId) => {
    try {
      const data = await unfollowUser(userId);
      console.log("Unfollow response:", data);
      // Refetch following list after unfollowing a user
      const updatedData = await getFollowing();
      console.log("Updated following list:", updatedData);
      setFollowing(updatedData.following);
      return data;
    } catch (error) {
      console.error("Failed to unfollow user:", error);
      throw error;
    }
  };

  const getFollowersHandler = async () => {
    setLoading(true);
    try {
      const data = await getFollowers();
      console.log("Followers data:", data);
      setFollowers(data.followers);
    } catch (error) {
      console.error("Failed to load followers:", error);
      setFollowers([]);
    } finally {
      setLoading(false);
    }
  };

  const getFollowingHandler = async () => {
    setLoading(true);
    try {
      const data = await getFollowing();
      console.log("Following data:", data);
      setFollowing(data.following);
    } catch (error) {
      console.error("Failed to load following:", error);
      setFollowing([]);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestedUsersHandler = async () => {
    setSuggestedLoading(true);
    try {
      const data = await getSuggestedUsers();
      setSuggestedUsers(data.users);
    } catch (error) {
      console.error("Failed to load suggested users:", error);
      setSuggestedUsers([]);
    } finally {
      setSuggestedLoading(false);
    }
  };

  return {
    followers,
    following,
    suggestedUsers,
    loading,
    suggestedLoading,
    followUserHandler,
    unfollowUserHandler,
    getFollowersHandler,
    getFollowingHandler,
    getSuggestedUsersHandler,
  };
};
