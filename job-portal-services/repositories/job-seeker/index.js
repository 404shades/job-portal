const JobSeeker = require("../../models").sequelize.models.JobSeeker;
const JobSeekerProfile  = require("../../models").sequelize.models.JobSeekerProfile;
const JobSeekerRepository = {
    async registerJobSeeker(job_seeker){
        
            const jobSeeker = await JobSeeker.create(job_seeker);
            const jobSeekerProfile = await JobSeekerProfile.create({
                JobSeekerId: jobSeeker.id
            })
            return {jobSeeker,jobSeekerProfile};
    },
    async findJobSeekerById(uuid){
        return await JobSeeker.findByPk(uuid)
    },
    async findJobSeekerByEmail(email){
        return await JobSeeker.findOne({where:{
            email:email
        }})
    },
    async isPasswordvalid(jobSeeker,password){
        return await jobSeeker.validPassword(password)
    }
}

module.exports = JobSeekerRepository;