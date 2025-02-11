  
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
  

async function Handler(req:NextRequest,res:NextResponse){
    // const {username}=await req.json();
    // console.log(username)
    // try{
    //     const response=await axios.get(`https://api.github.com/users/${username}/repos`,{
    //         headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    //       });
          
    //       type Repository = {
    //         language: string | null;
    //       };
    //       const languageCounts: Record<string, number> = {}; 
    //       const repositories: Repository[] = response.data;
    //       for (const repo of repositories) {
    //         if (repo.language) {
    //           languageCounts[repo.language] = (languageCounts[repo.language] ?? 0) + 1;
    //         }
    //       }
    //       console.log("Most used languages:", languageCounts);
    //       return NextResponse.json({msg:"repo info "},{status:200});
    // }catch(error){
    //     console.log("github server error " ,error)
    //     return NextResponse.json(
    //         { error: "Failed to fetch repo details"},
    //         { status: 500 }
    //       );
    //  }

      try {
        const {username} = await req.json();
    
        if (!username) {
          return new Response(JSON.stringify({ error: "Username is required" }), { status: 400 });
        }
    
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
    
        const repos: { languages_url: string }[] = await reposResponse.json();
        let languageBytes: Record<string, number> = {};
    
        for (const repo of repos) {
          const langResponse = await fetch(repo.languages_url);
          if (!langResponse.ok) continue;
    
          const langData: Record<string, number> = await langResponse.json();
          for (const [language, bytes] of Object.entries(langData)) {
            languageBytes[language] = (languageBytes[language] || 0) + bytes;
          }
        }
    
        const totalBytes = Object.values(languageBytes).reduce((acc, bytes) => acc + bytes, 0);
        const languageStats = Object.entries(languageBytes).map(([language, bytes]) => ({
          language,
          percentage: totalBytes ? ((bytes / totalBytes) * 100).toFixed(2) : "0",
        }));
    
        return new Response(JSON.stringify(languageStats), { status: 200, headers: { "Content-Type": "application/json" } });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
      }
    }
    

export {Handler as POST }