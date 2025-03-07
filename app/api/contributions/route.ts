  
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
  

async function Handler(req:NextRequest){
    const {username}=await req.json();
    try{
        const response=await axios.get(`https://api.github.com/users/${username}/events`,{
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          });
          const events =  response.data;

          if (!Array.isArray(events)) {
            return;
          }
        
          // Extract unique dates of activity
          // eslint-disable-next-line no-unused-vars
          const activeDays = new Set(
            events.map(event => new Date(event.created_at).toISOString().split("T")[0])
          );
          //console.log(`${username} was active on ${activeDays.size} different days.`);
          const eventsByDate: Record<string, number> = events.reduce((acc, event) => {
            const date = new Date(event.created_at).toISOString().split("T")[0]; // "YYYY-MM-DD"
            acc[date] = (acc[date] || 0) + 1;
            return acc;
          }, {});
      
          // Format data for the chart
          const chartData = Object.entries(eventsByDate).map(([date, count]) => ({ date, count }));
      
          return NextResponse.json(chartData, { status: 200 });
        }catch(error){
           alert("error in fetching")
           return NextResponse.json(error,{status:401})
        }
    }

export {Handler as POST }