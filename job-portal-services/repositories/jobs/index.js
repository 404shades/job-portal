const Jobs = require("../../models").sequelize.models.Jobs;
const Recruiter = require("../../models").sequelize.models.Recruiter;
const RecruiterProfile =
  require("../../models").sequelize.models.RecruiterProfile;
  const JobCategory = require("../../models").sequelize.models.JobCategory;
const JobsRepository = {
  createNewJob: async function (job) {
    return await Jobs.create(job);
  },
  getAllJobs: async function () {
    return await Jobs.findAll({
      include: [
        {
          model: Recruiter,
          include: [
            {
              model: RecruiterProfile,
            },
          ],
        },
        {
            model:JobCategory
        }
      ],
      where:{is_active:true}
    });
  },
};

module.exports = JobsRepository;
