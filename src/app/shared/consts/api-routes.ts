import { environment as env } from '../../../environments/environment';
export const API_ROUTES ={
LIST_USERS: env.BaseUrl + "api/users/?page={pageNumber}",
SINGLE_USER: env.BaseUrl + "api/users/{userId}",
CREATE: env.BaseUrl + "api/users/",
UPDATE: env.BaseUrl + "api/users/{userId}",
DELETE: env.BaseUrl + "api/users/{userId}",
REGISTER: env.BaseUrl + "api/register",
LOGIN : env.BaseUrl + "api/login/",
DELAYED_RESPONSE: env.BaseUrl + "api/suers?delay={delayTime}",
}