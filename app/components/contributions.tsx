"use client"

import ActivityChart from "./ui/contributions";
import { useContributionStore } from "../store/store";

const GitHubActivityPage = () => {
   
    const {contriDetails}=useContributionStore();
    console.log("from contribution pageg",contriDetails);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">GitHub Activity Tracker</h1>
      <ActivityChart data={contriDetails} />
    </div>
  );
};

export default GitHubActivityPage;
