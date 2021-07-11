import { RegisterJobSeekerRequest } from "../RegisterAuthRequest/register_auth_request";
import { RegisterRecruiterRequest } from "../RegisterAuthRequest/register_recruiter_request";

export interface DialogData{
    status:boolean;
    data:RegisterRecruiterRequest|RegisterJobSeekerRequest
}