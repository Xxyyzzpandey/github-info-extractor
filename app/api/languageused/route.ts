  
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
  

async function Handler(req:NextRequest){
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
      const { username } = await req.json();
  
      if (!username) {
        return new Response(JSON.stringify({ error: "Username is required" }), { status: 400 });
      }
  
      if (!process.env.GITHUB_TOKEN) {
        return new Response(JSON.stringify({ error: "GitHub token is missing" }), { status: 500 });
      }
  
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
      });
  
      const repos: { languages_url: string }[] = reposResponse.data;
      let languageBytes: Record<string, number> = {};
  
      await Promise.all(
        repos.map(async (repo) => {
          try {
            const langResponse = await axios.get(repo.languages_url, {
              headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
            });
  
            const langData: Record<string, number> = langResponse.data;
  
            for (const [language, bytes] of Object.entries(langData)) {
              languageBytes[language] = (languageBytes[language] || 0) + bytes;
            }
          } catch (error) {
            console.error(`Failed to fetch languages for repo: ${repo.languages_url}`, error);
          }
        })
      );
  
      const totalBytes = Object.values(languageBytes).reduce((acc, bytes) => acc + bytes, 0);
      const languageStats = Object.entries(languageBytes).map(([language, bytes]) => ({
        language,
        percentage: totalBytes ? ((bytes / totalBytes) * 100).toFixed(2) : "0",
      }));
  
      return new Response(JSON.stringify(languageStats), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
    }
    }
    

export {Handler as POST }