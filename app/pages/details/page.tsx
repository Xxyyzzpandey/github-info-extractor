"use client"

import { userdet } from "@/app/recoil/atoms"
import { useRecoilValue } from "recoil"
import UserProfile from "../../components/ui/profile"
 

 export default function UserDetails(){

     const userd=useRecoilValue(userdet)
     
    if(!userd){
        return<>loading userdetails ....</>
    }

 return<>
          <UserProfile name={userd?.name} username={userd?.username} bio={userd?.bio} following={userd?.following} activedays={userd?.activedays} language={userd?.language} location={userd?.location} avatar={userd?.avatar_url} stars={userd?.stars}/>
    </>
 }