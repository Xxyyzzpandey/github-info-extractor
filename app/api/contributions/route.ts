  
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
  

async function Handler(req:NextRequest,res:NextResponse){
    const {username}=await req.json();
    try{
        const response=await axios.get(`https://api.github.com/users/${username}/events`,{
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          });
          const events =  response.data;

          if (!Array.isArray(events)) {
            console.log("Error fetching events.");
            return;
          }
        
          // Extract unique dates of activity
          const activeDays = new Set(
            events.map(event => new Date(event.created_at).toISOString().split("T")[0])
          );
        
          console.log(`${username} was active on ${activeDays.size} different days.`);
        }catch(error){
           alert("error in fetching")
           return
        }
    }

export {Handler as POST }