"use client"

import UserProfile from "../../components/ui/profile"
import { useUserStore } from "@/app/store/store" 
import { useRepoStore } from "@/app/store/store";
import { useContributionStore } from "@/app/store/store";

 export default function UserDetails(){

     const {userDetails}=useUserStore();
    const {repoDetails}=useRepoStore();
    const {contriDetails}=useContributionStore()

    let stars=0;
    repoDetails.map((repo)=>{
        stars=stars+repo.stars;
    })
    
    

    if(!userDetails){
        return<>loading userdetails ....</>
    }

 return<>
          <UserProfile name={userDetails?.name} username={userDetails?.login} bio={userDetails?.bio} followers={userDetails.followers} following={userDetails.following} activedays={contriDetails?.length} language={userDetails?.language} location={userDetails?.location} avatar={userDetails?.avatar_url} stars={stars} repositories={userDetails.public_repos} createdate={userDetails.created_at} updatedate={userDetails.updated_at} email={userDetails?.email}/>
    </>
 }