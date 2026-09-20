import {APIRequestContext} from  '@playwright/test';
import { Endpoints } from '../endpoints/Endpoints';

export class Resource {
    constructor(private apicontext :APIRequestContext){}

    async resourceListGetMethod(){
        return await this.apicontext.get(Endpoints.listResource)
    }
    async resourceGetMethod(id :number){
        return await this.apicontext.get(Endpoints.singleResource(id))
    }
}