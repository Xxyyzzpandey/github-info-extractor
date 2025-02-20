import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { NavbarDemo } from "./navbar";
import { Button } from "./ui/button";

export function BackgroundLinesDemo() {
  return (<div className="bg-black">
   <div className="flex flex-col min-h-screen">
  {/* Navbar */}
  <NavbarDemo />

  {/* Main Content */}
  <BackgroundLines className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex-1">
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white 
      text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
      font-sans py-4 sm:py-6 md:py-8 lg:py-12 font-bold tracking-tight">
      Github Infomation , <br /> Gathering.
    </h2>

    <p className="max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-400 px-3 sm:px-6 md:px-10">
       A GitHub Information Gathering Website allows users to fetch and analyze GitHub profiles, repositories, contributions, 
       and languages using the GitHub API. It can display insights like most
       used languages, activity heatmaps, achievements, and repository stats to evaluate a developer’s coding footprint
    </p>

    <div className="mt-6 sm:mt-8 md:mt-10">
      <Button />
    </div>
  </BackgroundLines>
</div>


    </div>
  );
}
