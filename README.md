# Playwright advanced exmaple
Execute automated UI checks in the Book store application hosted in the server: https://demoqa.com

## Checks (Specs)
### Login
- tests/ui/specs/login.spec.ts
Steps
- Login into the page
- Check succesfull login
  - Check failing login - invalid username
  - Check failing login - invalid password
These tests log ins into the page using the values from the environment variables:
 - USERNAME
 - PASSWORD

### Profile
- tests/ui/specs/profile.ts
Steps
- Global login (storing the session in the `auth` folder)
- Check the sucessful login by browsing to the `profile` page and checking for an error message not displayed


## Available configurations
`playwright.config.ts`: Configuration used when executing the tests with stored authentication (`profile`tests)


## Executing the tests
### Windows
```bash
set USERNAME=<DemoQA User>
set PASSWORD=<DemoQA Password>
npx playwright test tests --project=chromium --headed
# or
npx playwright test tests --project=chromium --ui

# Single test suite
npx playwright test tests/ui/specs/profile.with.stored.auth.spec.ts --project=chromium --headed
```

- Predefined scripts
```bash
set USERNAME=<DemoQA User>
set PASSWORD=<DemoQA Password>
npm run test-ui
```
See available `scripts` in `package.json` file

