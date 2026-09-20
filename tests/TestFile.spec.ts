import { t } from '../fixtures/ObjectFixtures'
import {expect} from '@playwright/test'
import testData from '../data/TestData.json'
import createUser from  '../data/CreateUser.json'
import {allure} from 'allure-playwright'

t.beforeEach("allure Report", async()=>{
    await allure.epic('ReqRes Application');
    await allure.feature('User Feature under Reqres');
    await allure.story('List of User under User');
    await allure.severity('Normal');
    await allure.owner('Thivakar');
})

t("validate Get user list", async ({users}) => {
    allure.description("validate the list user endpoint")
    const response = await users.userGetMethod(testData.pageList)
    allure.step("validate status code" ,async ()=>{
        expect(await response.status()).toBe(200);
    })
    const responseBody = await response.json();
    allure.step("validate data Array present on responseBody", async ()=>{
        expect(await responseBody).toHaveProperty('data');
    })
    allure.step("validate page key schema", async ()=>{
        expect(await typeof responseBody.page).toBe('number')
    })
    allure.step("validate page value on responseBody", async ()=>{
        expect(await responseBody.page).toBe(testData.pageList)
    })
    allure.step("validate per_page key schema", async ()=>{
        expect(await typeof responseBody.per_page).toBe('number')
    })
    allure.step("validate per_page value on responseBody", async ()=>{
        expect(await responseBody.per_page).toBe(6);
    })
    allure.step("validate data key schema", async ()=>{
        expect(await typeof responseBody.data).toBe('object')
    })
    allure.step("validate email value for user on responseBody", async ()=>{
        expect(await responseBody.data.find((it:any) => it.first_name ===testData.expectedFirstName).email).toBe(testData.expectedMail)
    })
});

t("validate new User create by post method", async ({users}) => {
    allure.description("validate the list user endpoint")
            const response =await users.userPostMethod(createUser);
    allure.step("validate status code" ,async ()=>{
        expect(await response.status()).toBe(201);
        })
    const responseBody = await response.json();
    allure.step("validate id present on responseBody", async ()=>{
        expect(await responseBody).toHaveProperty('id');
    }) 
    allure.step("validate id schema on responseBody", async ()=>{
        expect(await typeof responseBody.id).toBe('string');
    })     
})