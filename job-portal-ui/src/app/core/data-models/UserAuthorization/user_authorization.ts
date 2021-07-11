export interface UserAuthData {
    userData?:   UserData;
    isRecruiter?: boolean;
    accessToken?: string;
}

export interface UserData {
    id?:            string;
    company_name?:  string;
    email?:         string;
    recuiter_name?: string;
    updatedAt?:     Date;
    createdAt?:     Date;
}