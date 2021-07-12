const JobApplications = require("../../models").sequelize.models.JobApplications;
const JobSeeker =  require("../../models").sequelize.models.JobSeeker;
const JobSeekerProfile = require("../../models").sequelize.models.JobSeekerProfile;
const Jobs = require("../../models").sequelize.models.Jobs;
const JobApplicationsRepository = {
    async createNewJobApplication(job_application){
        return await JobApplications.create(job_application)
    },
    async getJobApplicantsByRecruiterId(recruiterId){
        return await JobApplications.findAll({
            include:[
                { model: Jobs, where: { RecruiterId: recruiterId},}, 
                { model: JobSeeker, include: [{model: JobSeekerProfile}]} 
              ],
        })
    }
}

module.exports = JobApplicationsRepository