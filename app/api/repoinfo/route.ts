  
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
  

async function Repoinfo(req:NextRequest,res:NextResponse){
    const {username}=await req.json();
    try{
        const repoinfo=await axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`,{
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          });
          console.log(repoinfo)
          return NextResponse.json({msg:"repo info "},{status:200});
    }catch(error){
        console.log("github server error " ,error)
        return NextResponse.json(
            { error: "Failed to fetch repo details"},
            { status: 500 }
          );
     }
}

export {Repoinfo as POST }