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
    <div className="flex items-center flex-col max-h-full py-8 px-2">
      <div className="flex items-center flex-col">
        <img
          src="public/work-hays-logo-horizontal.png"
          className="lg:max-w-xl max-w-sm  "
        />
        <div className="lg:text-2xl text-lg text-gray-500 lg:-mt-6 -mt-4 mb-6">
          Recent Job Listings
        </div>
      </div>
      <div className="lg:max-w-5xl items-center flex flex-col">
        <div>{isLoading && <div>Loading Jobs...</div>}</div>
        {!isLoading &&
          jobs.map((item, index) => {
            return (
              <div className="m-4" key={index}>
                <div className="text-xs text-gray-500 leading-none">
                  {item.Company}
                </div>
                <div className="flex justify-between">
                  <a
                    className="lg:text-base font-bold text-sm w-64 lg:w-fit truncate text-indigo-500 hover:underline hover:text-indigo-600"
                    href={`https://www.workhays.com/jobs/${item.id}`}
                    target="_blank"
                  >
                    {item.Title} ↗
                  </a>
                  <div className="text-sm antialiased mr-2">{item.Date}</div>
                </div>
                <div className="leading-6 text-gray-900 antialiased line-clamp-3">
                  {item.Description}
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex items-center flex-col">
        <div className="text-xs text-gray-500 pt-6">
          &copy; Work Hays {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
