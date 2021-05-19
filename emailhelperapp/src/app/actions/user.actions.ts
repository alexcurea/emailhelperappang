import { User } from '../model/user';


export class SetCurrentUser {
    static readonly type = '[CurrentUser] Set';
    constructor(public payload: String) {

    }
}

