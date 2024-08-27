import React from "react";
import AppBar from "../common/AppBar";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="HoemPage">
      <div className="overlay">
        <AppBar />
        <div className="stHead">Providing Health Care</div>
        <div className="secHead">
          Good Doctor <span>=</span> Good Life
        </div>
        <div className="info">
          Early correct diagnosis and effective treatment
        </div>
        <Link
          href="#RecentWork"
          className="work relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="span1 absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="span2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get Started
          </span>
        </Link>
        <div className="squar"></div>
      </div>
    </div>
  );
};

export default HomePage;
