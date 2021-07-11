const Jobs = require("../../models").sequelize.models.Jobs;

const JobsRepository  = {
    createNewJob : async function(job){
        return await Jobs.create(job)
    }
}

module.exports = JobsRepository