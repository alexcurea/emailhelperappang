import {State, Action, StateContext, Selector} from '@ngxs/store';
import {SetCurrentUser} from '../actions/user.actions'
import { User } from '../model/user';
import { tap } from 'rxjs/operators';
import { UserService } from '../service/users.service';
import { Injectable } from '@angular/core';

export class UserStateModel {
    currentUser: String;
}

@State <UserStateModel>({
    name: 'user',
    defaults: {
    currentUser: null,
    }
})

@Injectable({
    providedIn: 'root'
  })
export class UserState{

    constructor (private userService: UserService) {}

    @Selector()
    static getCurrentUser(state: UserStateModel){
        return state.currentUser;
    }


    @Action(SetCurrentUser)
    setCurrentUser({getState, setState}: StateContext<UserStateModel>, {payload}: SetCurrentUser){
        const state = getState();
            setState({
                ...state,
                currentUser: payload,
            });
    }

}
