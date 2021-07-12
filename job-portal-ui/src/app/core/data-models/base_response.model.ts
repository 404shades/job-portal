import { JobApplications } from "./job-applications/job-applications.model";
import { CategoryData } from "./JobCategories";
import { JobsAvailableData } from "./jobs-available/jobs-available.data";
import { UserAuthData } from "./UserAuthorization/user_authorization";

export interface BaseResponseModel {
    doLogout?:   boolean;
    response?:   UserAuthData|CategoryData[]|JobsAvailableData[]|JobApplications[];
    statusCode?: number;
    messages?:   Messages;
}

export interface Messages {
    successMessage?: string;
    errorMessage?:   string;
}

