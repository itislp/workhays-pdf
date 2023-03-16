import { useEffect, useState } from "react";
import { getJobs } from "./util/api";

export const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const allJobs = getJobs();
    setJobs(allJobs.data);
    setLoading(false);
  }, []);
  return (
    <div className="flex items-center flex-col h-screen py-6 px-2">
      <div className="flex items-center flex-col">
        <img
          src="work-hays-logo-horizontal.png"
          className="lg:max-w-xl max-w-sm  "
        />
        <div className="lg:text-2xl text-lg text-gray-500 lg:-mt-6 -mt-4 mb-6">
          {jobs.length} Recent Job Listings
        </div>
      </div>
      {isLoading && (
        /*<div className="flex items-center justify-center">
                Loading Jobs
                <div className="ml-2 relative w-4 h-4 animate-spin rounded-full bg-gradient-to-r from-indigo-600 to-slate-200 ">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full "></div>
                </div>
              </div>*/
        <div className="lg:max-w-xl max-w-xs w-full mx-auto mt-8">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-indigo-500 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-indigo-500 rounded col-span-2"></div>
                  <div className="h-2 bg-indigo-500 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-indigo-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="lg:max-w-5xl items-center flex flex-col flex-grow">
        {!isLoading &&
          jobs.map((item, index) => {
            return (
              <div className="mx-3" key={index}>
                <div className="text-xs text-gray-500 leading-none">
                  {item.Company}
                </div>
                <div className="flex justify-between">
                  <a
                    className="lg:text-base font-bold text-sm w-64 lg:w-fit truncate text-indigo-500 hover:underline hover:text-indigo-600"
                    href={`https://www.workhays.com/jobs/${item.id}`}
                    //target="_blank"
                  >
                    {item.Title} ↗
                  </a>
                  <div className="text-sm antialiased mr-2 w-fit">
                    {item.Date}
                  </div>
                </div>
                <div className="leading-6 text-gray-900 antialiased line-clamp-3">
                  {item.Description}
                </div>
                <div className="border-b-gray-50 border my-6"></div>
              </div>
            );
          })}
      </div>
      <div className="flex items-center flex-col pb-6">
        <div className="text-xs text-gray-500 pt-6">
          &copy; Work Hays {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
