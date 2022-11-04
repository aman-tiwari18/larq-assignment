import React from "react";
import WorkCard from "./WorkCard";
import { workPageData, workPageData2 } from "../constant/constant";
import WCard from "./WCard";
import { wcardData1} from "../constant/Wconstant";

const Work = () => {
  return (
    <div className="bg-white p-6">
      <div className="mt-4 mx-10 grid grid-row-2 grid-flow-col gap-6">
        <div className="text-[40px] ml-20 font-bold italic text-quote row-span-2">
          OUR WORK<span className="animate-fade">{" _"}</span>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="grid-cols-2 grid gap-4">
            {workPageData.map((item) => (
              <WorkCard props={item} />
            ))}
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="grid-cols-2 grid gap-4">
            {workPageData2.map((item) => (
              <WorkCard props={item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full px-16 mt-16 items-center justify-center flex-wrap">
          {wcardData1.map((val, i) => (
            <WCard key={i} props={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
