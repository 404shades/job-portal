import { UserAuthData } from "./UserAuthorization/user_authorization";

export interface BaseResponseModel {
    doLogout?:   boolean;
    response?:   UserAuthData;
    statusCode?: number;
    messages?:   Messages;
}

export interface Messages {
    successMessage?: string;
    errorMessage?:   string;
}

