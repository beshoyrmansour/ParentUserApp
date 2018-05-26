import { User } from "../../shared/models/user";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { mockUsersData } from "../data/mock-users-data";

export class mockApiDataService {

    addOrUpdate(url, body, method = 'post') {
        return Observable.of()
    }

    delete(url) {
        return Observable.of()
    }

    getData(url) {
        return Observable.of(mockUsersData.user)
    }

}