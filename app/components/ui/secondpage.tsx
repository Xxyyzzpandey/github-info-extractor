"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { userdet } from "@/app/recoil/atoms";
import { useRouter } from "next/navigation";
import UserProfile from "./profile";
import {Userdetails} from "@/app/recoil/atoms"

const numStars = 150; // Number of stars

const StarryBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);
  const [username,setusername]=useState("");
  const [loading,setloading]=useState(false);
    const router =useRouter();
  const [user,userdetails]=useState<Userdetails>();

  const handleclick=async (e:any)=>{
         e.preventDefault();
        try{
            const response=await axios.post("/api/details",{username});
            console.log(response)
            if(response.status===200){
              console.log("in if conldld")
              userdetails(response.data)
              setloading(true);
              console.log("second data ",response.data.avatar_url)
              //router.push("/pages/details");
            }else {
              console.error("Unexpected response:", response);
              alert("Unexpected error occurred");
            }
        }catch(error:any){
            console.error("Request failed:", error);
            if (error.response) {
              console.log("Error Response:", error.response);
              alert(error.response.data.error || "Something went wrong");
            } else {
              alert("Network error or server issue");
            }
        }
  }

  useEffect(() => {
    const generateStars = () =>
      Array.from({ length: numStars }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
    }));
    setStars(generateStars());
    const handleResize = () => setStars(generateStars());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


   if(loading===true){
    return <>
        <UserProfile name={user?.name} username={user?.username} bio={user?.bio} following={user?.following} followers={user?.followers} activedays={user?.activedays} language={user?.language} location={user?.location } avatar={user?.avatar_url} stars={user?.stars} Repositories={user?.public_repos}/>
    </>
   }


  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3}px`, // Random size (1px - 3px)
            height: `${Math.random() * 3}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: Math.random(), // Random opacity for depth effect
          }}
        />
      ))}

      {/* Input & Button at the Center */}
      <div className="relative z-10 bg-opacity-80 p-6 rounded-lg flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="enter github username"
          className="w-64 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e)=>{setusername(e.target.value)}}/>
        <button className="w-64 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        onClick={handleclick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StarryBackground;
