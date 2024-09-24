# Bug Fix

1. Make delete function works
   * may be the CORS issue
   * Yes, I added `@CrossOrigin("http://localhost:3000")` at the JobController class, and it worked
   * Done
2. Wrong format of hook's paramters
   * Simple edit
   * Done
3. Add a update function at the backend
   * Done
4. 403 forbidden showed again on PUT method
   * Done
5. Only can update a part of field succeffuly
   * The name of field may be wrong
6. Add pagination function of jobs
   * Done
7. A error called `jobs.map is not a function`
   * This problem is because the jobs array which is fetched from server is not set in jobs hook properly
   * Through `console.log` and the console of Chrome to make it correct
   * Done
8. View all job page doesn't work
   * It is because the result of pagination query is different from normal gatAll.
   * Add the trinomial operator in hook `setJobs(isHome ? data.content : data)`
9. Delete the redundant field in Job class
   * Done



