import { User } from "../../shared/models/user";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { mockUsersData } from "../data/mock-users-data";

export class mockUsersService {
    rawUsersData = mockUsersData.rawUsersData
    allUsers: Array<User> = mockUsersData.allUsers
    user: User = mockUsersData.user
    listingUsers(pageNumber: number): Observable<any> {
        return Observable.of(this.rawUsersData)
    }

    getSingleUser(userId: number): Observable<User> {
        return Observable.of(this.user)
    }

    createUser(user: User): Observable<any> {
        return Observable.of(mockUsersData.createUserRes)
    }

    deleteUser(userId: number): Observable<Boolean> {
        return Observable.of(true)
    }

    updateUser(userId: number, userData: User): Observable<any> {
        return Observable.of(mockUsersData.updateUserRes)
    }

}