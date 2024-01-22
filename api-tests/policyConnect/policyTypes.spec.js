import { test, expect } from '@playwright/test';
let policyTypeId;

test.describe.configure({ mode: 'serial' });

test('Get all policy types', async ({ request }) => {

    const allPolicyTypes = await request.get('v1/Policies/GetPolicyTypes', {
        data: {

        }
    });

    expect(allPolicyTypes.status()).toEqual(200);
});

test('Create a Policy Type', async ({ request }) => {

    const createPolicyType = await request.post('v1/Policies/CreatePolicyType', {
        data: {
            'policyType': 'Test'
        }
    });

    const responseBody = await createPolicyType.json();
    // console.log(responseBody);
    policyTypeId = responseBody.PolicyTypeId;

    expect(createPolicyType.status()).toEqual(201);

})

test.skip('checking a specific object in the response', async ({ request }) => {

    const getAllPolicyTypes = await request.get('v1/Policies/GetPolicyTypes', {
        data: {
        }
    });

    const expectedObject = {
        PolicyType: 'Property',
        PolicyTypeId: 2
    };

    const getAllPolicyTypesResponse = await getAllPolicyTypes.json();
    // console.log(getAllPolicyTypesResponse);

    expect(getAllPolicyTypes.ok()).toBeTruthy();
    // expect(getAllPolicyTypesResponse).toMatchObject(expectedObject);

    expect(await getAllPolicyTypes.json()).toEqual(expect.objectContaining(expectedObject));
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
})
