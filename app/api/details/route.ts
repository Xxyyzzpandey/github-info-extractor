import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


async function Userdetails(req:NextRequest,res:NextResponse){
     const {username}=await req.json();
     try{
        if (!username) {
            return NextResponse.json({ error: "Username is required" }, { status: 400 });
          }
        const userdata = await axios.get(`https://api.github.com/users/${username}`, {
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          });
          console.log(userdata.data)
          console.log(userdata.data)
          return NextResponse.json({msg:"user details are found"},{status:200})
     }catch(error){
        console.log("github server error " ,error)
        return NextResponse.json(
            { error: "Failed to fetch user details"},
            { status: 500 }
          );
     }
}


export {Userdetails as POST }