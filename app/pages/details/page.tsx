"use client"

import UserProfile from "../../components/ui/profile"
import { useUserStore } from "@/app/store/store" 

 export default function UserDetails(){

     const {userDetails}=useUserStore();
    
    if(!userDetails){
        return<>loading userdetails ....</>
    }

 return<>
          <UserProfile name={userDetails?.login} username={userDetails?.username} bio={userDetails?.bio} followers={userDetails.followers} following={userDetails.following} activedays={userDetails?.activedays} language={userDetails?.language} location={userDetails?.location} avatar={userDetails?.avatar_url} stars={userDetails?.stars} repositories={userDetails.public_repos}/>
    </>
 }