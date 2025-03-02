"use client";

import React from "react";
import { RepoCard } from "./repocard";
import { LangCard } from "./repocard";
import Chart from "../charts"
import GitHubActivityPage from "../contributions";

const UserProfile = ({avatar,name,username,bio,followers,following,activedays,repositories,location="not mentioned",stars,createdate,updatedate,email}:any) => {

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
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{stars}</p>
          <p className="text-sm text-gray-400">total stars</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{createdate}</p>
          <p className="text-sm text-gray-400">Acount Created At</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg font-bold">{updatedate}</p>
          <p className="text-sm text-gray-400">Account Last updated</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-2 md:col-span-1">
          <p className="text-lg font-bold">{location}</p>
          <p className="text-sm text-gray-400">Location</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-2 md:col-span-1">
          <p className="text-lg font-bold">{email}</p>
          <p className="text-sm text-gray-400">Email</p>
        </div>
      </div>
      <div className="mt-6 text-center">
      <h2>Overall Language Stats </h2>
       <LangCard/>
       <Chart/>
       <GitHubActivityPage/>
        <h2>Public Repositories </h2>
        <RepoCard/>
      </div>
    </div>
  );
};

export default UserProfile;
