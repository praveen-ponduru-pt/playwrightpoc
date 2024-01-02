import { test, expect } from '@playwright/test';
let token;

test('Generate Token', async ({ request }) => {
    const generateToken = await request.get('91684d52-3c52-484e-9357-8f02674ae18c/oauth2/v2.0/token', {
        form: {
            client_id: '6e81bbd8-3553-4c32-91fb-d1e7bbfd7376',
            client_secret: 'lxF8Q~UCsn43RB-wi_v3d.BKeH9UxDzT.x9VFbtQ',
            scope: 'https://insuredconnectv2.onmicrosoft.com/6e81bbd8-3553-4c32-91fb-d1e7bbfd7376/.default',
            grant_type: 'client_credentials'
        }
    });
    // expect(allPolicyTypes.body.ok()).toBeTruthy();
    expect(generateToken.status()).toEqual(200);
    console.log(generateToken.url());

    // const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    // expect(issues.ok()).toBeTruthy();
    // expect(await issues.json()).toContainEqual(expect.objectContaining({
    //     title: '[Bug] report 1',
    //     body: 'Bug description'
    // }));

    // exports.token = await generateToken.json();
});
