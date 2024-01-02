import { test, expect } from '@playwright/test';

let token;

// import { token } from '../generateToken/generateToken.spec.js';

test.beforeAll('Generate Token', async ({ request }) => {

    const generateToken = await request.get('https://login.microsoftonline.com/91684d52-3c52-484e-9357-8f02674ae18c/oauth2/v2.0/token', {
        form: {
            client_id: '6e81bbd8-3553-4c32-91fb-d1e7bbfd7376',
            client_secret: 'lxF8Q~UCsn43RB-wi_v3d.BKeH9UxDzT.x9VFbtQ',
            scope: 'https://insuredconnectv2.onmicrosoft.com/6e81bbd8-3553-4c32-91fb-d1e7bbfd7376/.default',
            grant_type: 'client_credentials'
        }
    });

    expect(generateToken.status()).toEqual(200);

    token = await generateToken.json();
    token = token.access_token;
});

test('Get all policy types with comm hub', async ({ request }) => {

    const allPolicyTypes = await request.get('https://communicationhub-qa.vcasoftware.com/PolicyConnect/v1/Policies/GetPolicyTypes', {
        extraHTTPHeaders: {
            'Authorization': `Bearer ${token}`
        },
    });

    console.log(allPolicyTypes);
    console.log(token);

    const responseBody = allPolicyTypes.json();
    console.log(responseBody);
    expect(allPolicyTypes.status()).toEqual(200);
    console.log(allPolicyTypes.url());

});

// export { token };