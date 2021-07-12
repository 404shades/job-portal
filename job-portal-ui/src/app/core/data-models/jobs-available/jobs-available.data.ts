export interface JobsAvailableData {
    id?:                 string;
    job_description?:    string;
    job_title?:          string;
    is_active?:          boolean;
    last_date_to_apply?: null;
    createdAt?:          Date;
    updatedAt?:          Date;
    JobCategoryId?:      number;
    RecruiterId?:        string;
    Recruiter?:          Recruiter;
    JobCategory?:        JobCategory;
}

export interface JobCategory {
    id?:            number;
    category_name?: string;
    createdAt?:     Date;
    updatedAt?:     Date;
}

export interface Recruiter {
    id?:               string;
    company_name?:     string;
    email?:            string;
    recuiter_name?:    string;
    password?:         string;
    createdAt?:        Date;
    updatedAt?:        Date;
    RecruiterProfile?: RecruiterProfile;
}

export interface RecruiterProfile {
    id?:              number;
    website?:         null;
    phone?:           null;
    company_logo?:    null;
    description?:     null;
    company_address?: null;
    createdAt?:       Date;
    updatedAt?:       Date;
    RecruiterId?:     string;
}
