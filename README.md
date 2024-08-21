* The project build with "Cypress framework - JS"
* There is folder support / pages that contains 2 main classes
* The web app used is https://opensource-demo.orangehrmlive.com/

  * LoginPage.js
  * Forgotpassword.js
 
* There is another folder named "e2e" at which there are 2 main test files

  * Login.cy.js
  * ForgotPassword.cy.js
 
* There is json test data file named "TestData.json" used as a data store for login creds to the web app

  
* How can we integrate the framework to Jenkins CI ?

  * Define the branch being used
  * setup build triggers and webhooks
  * Install Node.JS on Jenkins server as Cypress depends on Node JS
  * Adding build steps for Cypress by configuring the build steps by "npm install"
  * Adding a build step for running the test framework using the command "npx cypress run" in a batch file in headless mode
  * I can also add post-build actions for generating HTML reports  through something like Cucumber reports or Junit
  * Also we can install a webhook and configuration for Jenkis to listen to the automation repo and trigger the build once new commits added
