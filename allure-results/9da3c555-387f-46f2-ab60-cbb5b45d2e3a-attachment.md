# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestFile.spec.ts >> validate new User create by post method
- Location: tests\TestFile.spec.ts:45:2

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
```

# Test source

```ts
  1  | import { t } from '../fixtures/ObjectFixtures'
  2  | import {expect} from '@playwright/test'
  3  | import testData from '../data/TestData.json'
  4  | import createUser from  '../data/CreateUser.json'
  5  | import {allure} from 'allure-playwright'
  6  | 
  7  | t.beforeEach("allure Report", async()=>{
  8  |     await allure.epic('ReqRes Application');
  9  |     await allure.feature('User Feature under Reqres');
  10 |     await allure.story('List of User under User');
  11 |     await allure.severity('Normal');
  12 |     await allure.owner('Thivakar');
  13 | })
  14 | 
  15 | t("validate Get user list", async ({users}) => {
  16 |     allure.description("validate the list user endpoint")
  17 |     const response = await users.userGetMethod(testData.pageList)
  18 |     allure.step("validate status code" ,async ()=>{
  19 |         expect(await response.status()).toBe(200);
  20 |     })
  21 |     const responseBody = await response.json();
  22 |     allure.step("validate data Array present on responseBody", async ()=>{
  23 |         expect(await responseBody).toHaveProperty('data');
  24 |     })
  25 |     allure.step("validate page key schema", async ()=>{
  26 |         expect(await typeof responseBody.page).toBe('number')
  27 |     })
  28 |     allure.step("validate page value on responseBody", async ()=>{
  29 |         expect(await responseBody.page).toBe(testData.pageList)
  30 |     })
  31 |     allure.step("validate per_page key schema", async ()=>{
  32 |         expect(await typeof responseBody.per_page).toBe('number')
  33 |     })
  34 |     allure.step("validate per_page value on responseBody", async ()=>{
  35 |         expect(await responseBody.per_page).toBe(6);
  36 |     })
  37 |     allure.step("validate data key schema", async ()=>{
  38 |         expect(await typeof responseBody.data).toBe('object')
  39 |     })
  40 |     allure.step("validate email value for user on responseBody", async ()=>{
  41 |         expect(await responseBody.data.find((it:any) => it.first_name ===testData.expectedFirstName).email).toBe(testData.expectedMail)
  42 |     })
  43 | });
  44 | 
  45 | t("validate new User create by post method", async ({users}) => {
  46 |     allure.description("validate the list user endpoint")
  47 |             const response =await users.userPostMethod(createUser);
  48 |     allure.step("validate status code" ,async ()=>{
> 49 |         expect(await response.status()).toBe(201);
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  50 |         })
  51 |     const responseBody = await response.json();
  52 |     allure.step("validate id present on responseBody", async ()=>{
  53 |         expect(await responseBody).toHaveProperty('id');
  54 |     }) 
  55 |     allure.step("validate id schema on responseBody", async ()=>{
  56 |         expect(await typeof responseBody.id).toHaveProperty('stirng');
  57 |     })     
  58 | })
```