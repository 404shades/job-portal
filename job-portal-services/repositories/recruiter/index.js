const Recruiter  = require("../../models").sequelize.models.Recruiter;
'use strict';
const RecruiterRepository = {
    createNewRecruiter : async function(recruiter){
        return await Recruiter.create(recruiter)
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