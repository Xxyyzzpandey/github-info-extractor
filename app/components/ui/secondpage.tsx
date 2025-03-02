"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContributionStore, useLangStore, useUserStore } from "../../store/store";
import { useRepoStore } from "../../store/store";
import Spinner from "./loading"

const numStars = 150; // Number of stars

const StarryBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);
  const [username,setusername]=useState("");
  const [loading,setloading]=useState(false);
  const router =useRouter();
  const {setUserDetails}=useUserStore()
  const {setRepoDetails}=useRepoStore()
  const {setLangDetails}=useLangStore()
  const {setContributionDetails}=useContributionStore();

  const handleclick=async (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>)=>{
         e.preventDefault();
         setloading(true);
        try{
            if(!username){
              alert("username is required")
              return;
            }
            const [response1,response2,response3,response4]=await axios.all([
              await axios.post("/api/details",{username}),
              await axios.post("/api/repoinfo",{username}),
              await axios.post("/api/languageused",{username}),
              await axios.post("/api/contributions", {username})
            ])
            console.log(response1)
            if(response1.status===200 && response2.status===200 && response3.status===200 && response4.status===200){
              setUserDetails(response1.data)
              setRepoDetails(response2.data)
              setLangDetails(response3.data)
              setContributionDetails(response4.data);
              console.log("from second pafe",response4.data)
            }else {
              console.error("Unexpected response:", response1);
              alert("Unexpected error occurred");
            }
        }catch (error: unknown) {
          console.error("Request failed:", error);
          if (axios.isAxiosError(error)) {
            console.log("Error Response:", error.response);
            alert(error.response?.data?.error || "Something went wrong");
          } else {
            alert("Network error or server issue");
          }
        }finally{
          router.push("/pages/details");
          setloading(false)
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
       <Spinner/>
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
