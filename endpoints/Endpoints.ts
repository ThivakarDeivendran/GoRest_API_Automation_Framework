
export const Endpoints={
    listUser:(id:number) => `/api/users?page=${id}`,
    singleUser : (id:number) => `/api/users/${id}`,
    createUser : `/api/users`,
    delayedUserResponse : (id :number) => `/api/users?delay=${id}`,
    listResource : `/api/unknown`,
    singleResource : (id: number) => `/api/unknown/${id}`,
    register : `/api/register`,
    login :`/api/login`
}