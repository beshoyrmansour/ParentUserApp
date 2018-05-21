import { environment as env } from '../../../environments/environment';
export const API_ROUTES ={
LIST_USERS: env.BaseUrl + "api/suers/?page={pageNumber}",
SINGLE_USER: env.BaseUrl + "api/suers/{userId}",
CREATE: env.BaseUrl + "api/suers/",
UPDATE: env.BaseUrl + "api/suers/{userId}",
DELETE: env.BaseUrl + "api/suers/{userId}",
REGISTER: env.BaseUrl + "api/register",
LOGIN : env.BaseUrl + "api/login/",
DELAYED_RESPONSE: env.BaseUrl + "api/suers?delay={delayTime}",
}