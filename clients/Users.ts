import {APIRequestContext} from  '@playwright/test';
import { Endpoints } from '../endpoints/Endpoints';
export class Users{
    constructor(private apiContext: APIRequestContext) {}

    async userGetMethod(id : number){
        return await this.apiContext.get(Endpoints.listUser(id))
    }
    async userPostMethod(userNewData :object){
        return await this.apiContext.post(Endpoints.createUser,{
            data: userNewData,
            headers: {
                 'content-Type' :'application/json',
                  'api-key': process.env.API_KEY!
            }
        })
    }
    async userSingleGetMethod(id: number){
        return await this.apiContext.get(Endpoints.singleUser(id))
    }
    async userDeleteMethod(id: number){
        return await this.apiContext.delete(Endpoints.singleUser(id))
    }
     async userDelayedGetMethod(id: number){
        return await this.apiContext.get(Endpoints.delayedUserResponse(id))
    }
}