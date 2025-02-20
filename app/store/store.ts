import { details } from "motion/react-client";
import {create} from "zustand"

interface UserDetails {
    login?: string;
    username?:string;
    location?:string;
    name?: string;
    avatar_url?: string;
    bio?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    activedays?:number;
    language?:string;
    stars?:number
    email?:number
    updated_at?:Date;
    created_at?:Date;
  }

  interface RepoDetails {
     name:string,
     url:string,
     language:string,
     stars:number
  }

  interface LangDetails{
    language:string,
    percentage:number
  }
  
  interface ContributionDetails{
      date:string,
      count:number
  }

interface UserState {
    userDetails: UserDetails
    setUserDetails: (details:UserDetails) => void;
  }

export const useUserStore = create<UserState >((set) => ({
    userDetails: {}, // Initialize as empty object
    setUserDetails: (details) => set({ userDetails: details }), 
  }));


  interface RepoState{
    repoDetails:RepoDetails[];
    setRepoDetails:(details:RepoDetails[])=>void;
  }

  export const useRepoStore=create<RepoState>((set)=>({
    repoDetails:[],
    setRepoDetails:(details)=>set({repoDetails:details}),
  }))

  interface LangState{
    langDetails:LangDetails[];
    setLangDetails:(details:LangDetails[])=>void;
  }

  export const useLangStore=create<LangState>((set)=>({
    langDetails:[],
    setLangDetails:(details)=>set({langDetails:details}),
  }))

  interface ContributionState {
    contriDetails: ContributionDetails[];
    setContributionDetails: (details: ContributionDetails[]) => void;
  }
  
  export const useContributionStore = create<ContributionState>((set) => ({
    contriDetails: [],
    setContributionDetails: (details) => set({ contriDetails: details }),
  }));