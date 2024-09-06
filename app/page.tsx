"use client";

import Link from "next/link";
import { data } from "@/components/Data";
import { cn } from "@/lib/utils";
import { libre } from "@/components/Font";

export default function Home() {

  const openRandomWebsite = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedUrl = data[randomIndex].url;
    window.open(selectedUrl, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen py-10 md:py-16 lg:py-28 px-5">
      <div>
        <div className={cn(libre.className, "text-4xl")}>O Webring! My Webring!</div>
        <div className={libre.className}>a webring of webrings</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-10">
          {data.map((item) => {
            return (
              <Link href={item.url}>
                <div className="border border-slate-300 hover:border-slate-600 px-3 py-4 text-center">
                  <div>{item.name}</div>
                  <div className="text-sm mt-2 text-slate-600">{item.description}</div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="flex justify-center my-10">
          <button
            onClick={openRandomWebsite}
            className="px-5 py-3 border border-slate-300 hover:shadow-md bg-slate-300 hover:bg-slate-400">
            Visit a random webring
          </button>
        </div>
      </div>
    </div >
  );
}
