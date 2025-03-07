import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


async function Userdetails(req:NextRequest){
     const {username}=await req.json();
    // console.log(username)
     try{
        if (!username) {
            return NextResponse.json({ error: "Username is required" }, { status: 400 });
          }
        const userdata = await axios.get(`https://api.github.com/users/${username}`, {
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          });
          //console.log(userdata.data)
          return NextResponse.json(userdata.data,{status:200})
     // eslint-disable-next-line no-unused-vars
     }catch(error){
        //console.log("github server error " ,error)
        return NextResponse.json(
            { error: "Failed to fetch user details"},
            { status: 500 }
          );
     }
}


export {Userdetails as POST }