import {APIRequestContext} from  '@playwright/test';
import { Endpoints } from '../endpoints/Endpoints';

export class Auth{
    constructor(private apiContext :APIRequestContext){}

    async registerPostMethod(testData :Object){
        return await this.apiContext.post(Endpoints.register,{
            data: testData,
            headers :{
                 'content-Type' :'application/json',
                 Authorization :`Bearer `
            }
        }
        )
    }
    async loginPostMethod(testData :Object){
        return await this.apiContext.post(Endpoints.login,{
            data: testData,
            headers :{
                 'content-Type' :'application/json',
                 Authorization :`Bearer `
            }
        }
        )
    }
}