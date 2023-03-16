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
    <>
      <div>{isLoading && <div>Loading Jobs...</div>}</div>
      {!isLoading &&
        jobs.map((item, index) => {
          return (
            <div key={index}>
              {index} - {item.Company} {item.Title}
            </div>
          );
        })}
    </>
  );
};
