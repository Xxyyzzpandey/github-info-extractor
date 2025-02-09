import {create} from "zustand"

interface UserDetails {
    login?: string;
    name?: string;
    avatar_url?: string;
    bio?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
  }

interface UserState {
    userDetails: UserDetails
    setUserDetails: (details:UserDetails) => void;
  }

export const useUserStore = create<UserState >((set) => ({
    userDetails: {}, // Initialize as empty object
    setUserDetails: (details) => set({ userDetails: details }), 
  }));