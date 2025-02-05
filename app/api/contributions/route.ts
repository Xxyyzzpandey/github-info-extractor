  
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
  

async function Handler(req:NextRequest,res:NextResponse){
    const {username}=await req.json();
    try{
        const response=await axios.get(`https://api.github.com/users/${username}/events`,{
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          });
          console.log(response)
          return NextResponse.json({msg:"repo info "},{status:200});
    }catch(error){
        console.log("github server error " ,error)
        return NextResponse.json(
            { error: "Failed to fetch repo details"},
            { status: 500 }
          );
     }
}

export {Handler as POST }