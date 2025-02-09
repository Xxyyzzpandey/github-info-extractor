"use client";

import React from "react";
import { RepoCard } from "./repocard";

const UserProfile = ({avatar,name,username,bio,followers,following,activedays,repositories,location,language,stars,reponame,urllink}:any) => {

    const Repo=()=>{
    return<>
        <div className="mt-6 text-center">
        <h2>Repositories Name : Link</h2>
        <p className="mt-2 text-gray-300 text-sm md:text-lg">Name:{user.location}  <a className="text-blue-600" href={user.username}>{user.username}kjfddddddddddddddddddddddjkkkkkkkkkkk</a></p>
      </div>
    </>
}

  // Dummy User Data (Replace with real data from API)
  const user = {
    avatar: "https://via.placeholder.com/150", // Replace with real avatar URL
    name: "John Doe",
    username: "@johndoe",
    bio: "Software Engineer | Open Source Contributor | Tech Enthusiast",
    followers: 1234,
    activeDays: 250,
    repositories: 42,
    location: "San Francisco, CA",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* Avatar Section */}
      <div className="relative">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* User Details */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
        <p className="text-gray-400 text-sm md:text-base">{username}</p>
        <p className="mt-2 text-gray-300 text-sm md:text-lg">{bio}</p>
      </div>

      {/* User Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{followers}</p>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{following}</p>
          <p className="text-sm text-gray-400">following</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{activedays}</p>
          <p className="text-sm text-gray-400">Active Days</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{repositories}</p>
          <p className="text-sm text-gray-400">Repositories</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-2 md:col-span-1">
          <p className="text-lg font-bold">{location}</p>
          <p className="text-sm text-gray-400">Location</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{language}</p>
          <p className="text-sm text-gray-400">Most used language</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{stars}</p>
          <p className="text-sm text-gray-400">total stars</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <h2>Repositories Name : Link</h2>
        <RepoCard reponame={reponame} urllink={urllink} />
      </div>
    </div>
  );
};

export default UserProfile;
