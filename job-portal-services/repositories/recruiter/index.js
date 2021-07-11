const Recruiter  = require("../../models").sequelize.models.Recruiter;
const RecruiterProfile  = require("../../models").sequelize.models.RecruiterProfile
const RecruiterRepository = {
    createNewRecruiter : async function(recruiterDetails){
        const recruiter = await Recruiter.create(recruiterDetails);
        const recruiterProfile = await RecruiterProfile.create({RecruiterId:recruiter.id})
        return {recruiter,recruiterProfile}
    },
    findRecruiterById:async function(uuid) {
        return await Recruiter.findByPk(uuid)
    },

    findRecruiterByEmail: async function(email){
        return await Recruiter.findOne({where:{
            email:email
        }})
    },
    isPasswordValid:async function(recruiter,password){
        return await recruiter.validPassword(password)
    }
}

module.exports = RecruiterRepository;