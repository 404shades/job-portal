export interface JobApplications {
    id?:          number;
    createdAt?:   Date;
    updatedAt?:   Date;
    JobId?:       string;
    JobSeekerId?: string;
    Job?:         Job;
    JobSeeker?:   JobSeeker;
}

export interface Job {
    id?:                 string;
    job_description?:    string;
    job_title?:          string;
    is_active?:          boolean;
    last_date_to_apply?: null;
    createdAt?:          Date;
    updatedAt?:          Date;
    JobCategoryId?:      number;
    RecruiterId?:        string;
}

export interface JobSeeker {
    id?:               string;
    email?:            string;
    password?:         string;
    full_name?:        string;
    createdAt?:        Date;
    updatedAt?:        Date;
    JobSeekerProfile?: JobSeekerProfile;
}

export interface JobSeekerProfile {
    id?:                number;
    gender?:            null;
    cv_path?:           null;
    date_of_birth?:     null;
    phone?:             null;
    short_description?: null;
    createdAt?:         Date;
    updatedAt?:         Date;
    JobSeekerId?:       string;
}
