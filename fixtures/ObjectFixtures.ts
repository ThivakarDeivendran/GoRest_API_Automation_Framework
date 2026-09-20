import { request } from "node:http";
import { Auth } from "../clients/Auth";
import { Resource } from "../clients/Resource";
import { Users } from "../clients/Users";
import {test} from '@playwright/test'

type myFixtures ={
    auth :Auth,
    resource :Resource
    users :Users
}

export const t = test.extend<myFixtures>({
    auth : async ({request}, use) => {
        await use(new Auth(request));
    },

    resource : async({request}, use) =>{
        await  use (new Resource(request))
    },
    users : async({request}, use) => {
        await use (new Users(request))
    }
})