import React from "react";

export default function Projects() {
  return (
    <>
      <div className="grid auto-rows-[120px] grid-cols-3 gap-4 mx-40 mt-8">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}
