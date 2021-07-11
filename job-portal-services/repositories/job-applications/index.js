const JobApplications = require("../../models").sequelize.models.JobApplications;


const JobApplicationsRepository = {
    async createNewJobApplication(job_application){
        return await JobApplications.create(job_application)
    }
}

module.exports = JobApplicationsRepository