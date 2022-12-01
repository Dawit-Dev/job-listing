import React from "react";
import "./jobListing.css";
import FilterList from "./FilterList";
import Job from "./Job";

const JobListing = ({
  filteredJobs,
  favFiltered,
  favHandler,
  setFavFiltered,
}) => {
  return (
    <>
      <FilterList favFiltered={favFiltered} setFavFiltered={setFavFiltered} />
      {filteredJobs.map((obj, index) => {
        return <Job key={index} favHandler={favHandler} obj={obj}></Job>;
      })}
    </>
  );
};

export default JobListing;
