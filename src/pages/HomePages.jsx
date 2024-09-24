import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePages = () => {
    return (
        <>
            <Hero title='GOOD JOB' subtitle="It's all good, man"/>
            <HomeCard isHome={true} />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePages