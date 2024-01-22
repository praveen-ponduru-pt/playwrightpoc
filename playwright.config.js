// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // testDir: './api-tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: false
  },

  // timeout: 160000,


  /* Configure projects for major browsers */
  projects: [

    // {
    //   name: 'Orange HRMS',
    //   testDir: './tests',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    {
      name: 'Policy Connect QA',
      testDir: './api-tests/policyConnect',
      fullyParallel: false,
      use: {
        baseURL: 'https://policyconnect-qa.vcasoftware.com',
        extraHTTPHeaders: {

          'companyId': '44AB7DA9-A276-4BFB-8675-E46BE20B0682',
        }
      }
    },

    {
      name: 'Policy Connect DEV',
      testDir: './api-tests/policyConnect1',
      use: {
        baseURL: 'https://policyconnect-ic.vcasoftware.com',
        extraHTTPHeaders: {

          'Accept': '*/*',
          'companyId': '44AB7DA9-A276-4BFB-8675-E46BE20B0682',

          'Authorization': '',
        }
      }
    },


    {
      name: 'Generate token',
      testDir: './api-tests/generateToken1',
      use: {
        baseURL: 'https://login.microsoftonline.com',
        extraHTTPHeaders: {
          'Accept': '*/*',
          'Authorization': '',
        }
      }
    },


    {
      name: 'Communication Hub QA',
      testDir: './api-tests/commHub1',
      use: {
        baseURL: 'https://communicationhub-qa.vcasoftware.com/',
        extraHTTPHeaders: {
          // // We set this header per GitHub guidelines.
          // 'Accept': '*/*',
          // // Add authorization token to all requests.
          // // Assuming personal access token available in the environment.
          // 'Authorization': `Bearer ${generateToken}`,
        }
      }
    }
  ]

});
