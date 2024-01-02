import { test, expect } from '@playwright/test';
let policyTypeId;

test.describe.configure({ mode: 'serial' });

test('Get all policy types', async ({ request }) => {
    const allPolicyTypes = await request.get('v1/Policies/GetPolicyTypes', {
        data: {

        }
    });
    // expect(allPolicyTypes.body.ok()).toBeTruthy();
    expect(allPolicyTypes.status()).toEqual(200);

    // const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    // expect(issues.ok()).toBeTruthy();
    // expect(await issues.json()).toContainEqual(expect.objectContaining({
    //     title: '[Bug] report 1',
    //     body: 'Bug description'
    // }));
});

test('Create a Policy Type', async ({ request }) => {
    const createPolicyType = await request.post('v1/Policies/CreatePolicyType', {
        data: {
            'policyType': 'Test'
        }
    });

    const responseBody = await createPolicyType.json();
    console.log(responseBody);
    policyTypeId = responseBody.PolicyTypeId;

    expect(createPolicyType.status()).toEqual(201);

})

test.skip('checking a specific object in the response', async ({ request }) => {
    const getAllPolicyTypes = await request.get('v1/Policies/GetPolicyTypes', {
        data: {
        }
    });

    const expectedObject = {
        PolicyType: 'Test',
        PolicyTypeId: policyTypeId
    };

    const getAllPolicyTypesResponse = await getAllPolicyTypes.json();
    console.log(getAllPolicyTypesResponse);
    expect(getAllPolicyTypes.ok()).toBeTruthy();
    // expect(getAllPolicyTypesResponse).toMatchObject(expectedObject);

    expect(await getAllPolicyTypes.json()).toContainEqual(expect.objectContaining({
        PolicyType: 'Test',
        PolicyTypeId: policyTypeId
    }));
});

test('Enable/ Disable policy type', async ({ request }) => {
    const updatePolicyType = await request.put('v1/Policies/EnableOrDisablePolicyType', {
        data: {
            "policyTypeId": policyTypeId,
            "active": false
        }
    });
    expect(updatePolicyType.ok()).toBeTruthy();

    console.log(policyTypeId);
    expect(updatePolicyType.status()).toEqual(200);

    const responseJson = await updatePolicyType.json();
    expect(responseJson).toEqual({ PolicyTypeId: policyTypeId, Status: 'Updated' });
})

test('Get Policy Type which is disabled', async ({ request }) => {
    const getDisabledPolicyType = await request.get(`v1/Policies/GetPolicyTypeById/${policyTypeId}`);

    expect(getDisabledPolicyType.ok()).toBeFalsy();
    console.log(getDisabledPolicyType.url());
})