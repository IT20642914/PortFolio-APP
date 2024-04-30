import React, { useEffect, useState } from "react";
import AdminJobs from "../../components/AdminJobs/AdminJobs";
import SideNavBar from "../../components/SideNav/SideNavBar";
import AddJob from "../../components/AddJob/AddJob";
import axios from 'axios'
import JobReport from "../../components/JobReport/JobReport";

const CareerAdmin = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios
      .get("http://localhost:5000/api/job")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Sample logic for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5); // Number of jobs per page

  // Calculate index of the last job on the current page
  const indexOfLastJob = currentPage * jobsPerPage;

  // Calculate index of the first job on the current page
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Slice the jobs array to get jobs for the current page
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <SideNavBar />
      <div className="ml-64 mt-8 px-4">
        {" "}
        {/* <button className="bg-customGray hover:bg-customGray2 text-white hover:text-customGray4 font-bold py-2 px-4 rounded mb-4 mr-4 float-right">
          <span className="mr-2">+</span> Add
        </button> */}
        <JobReport/>
        <AddJob/>
        <AdminJobs
          jobs={currentJobs}
          paginate={paginate}
          pageNumbers={pageNumbers}
        />
        {/* Pagination */}
        <nav className="mt-4 mb-0">
          <ul className="flex justify-center">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className="bg-customGray2 hover:bg-customGray text-white font-bold py-2 px-4 rounded mr-2"
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default CareerAdmin;
