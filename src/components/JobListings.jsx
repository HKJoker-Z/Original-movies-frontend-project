import React from 'react'
import JobListing from './JobListing'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchJobs = async () => {
            //page query prev
            const apiUrl = isHome ? '/api/jobs/get3Job' 
            // const apiUrl = isHome ? '/api/jobs/getAll'
                :
                '/api/jobs/getAll'

            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                console.log(data)
                setJobs(isHome ? data.content : data)
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, [])

    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Ready to get a damn job?' : 'Here is all the fucking job'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loading ? (<Spinner />) : (<>
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </>)}


                    </div>
                </div>
            </section>
        </>
    )
}

export default JobListings