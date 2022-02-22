//Login using different usernames by fetching data from fixtures 
describe('LoginWithDifferentUsers', function () {

    beforeEach(function () { //fetching data from fixtures
        cy.fixture('TestData').then(credentials => { // 'TestData'(file name) under fixtures(folder) having data
            this.credentials = credentials;
        })
        cy.fixture('Locators').then(path => { //'Locators'(file name) under fixtures(folder) having data
            this.path = path;
        })


    });


    afterEach(() => {

        cy.logout(); //method to logout (in commands.js file under support folder)
    });

    it("LoginUser1", function () {
        cy.login(this.credentials.Username1, this.credentials.PasswordAll); //method to login user1 with data fetched from fixtures
        cy.verifyLogin(this.path.ProductsDom); //method to verify login page (in commands.js file under support folder) 

    })

    it("LoginUser2", function () {
        cy.login(this.credentials.Username2, this.credentials.PasswordAll); //method to login user2 with data fetched from fixtures
        cy.verifyLogin(this.path.ProductsDom); //method to verify login page (in commands.js file under support folder)
    })

    it("LoginUser3", function () {
        cy.login(this.credentials.Username3, this.credentials.PasswordAll); // method to login user3 with data fetched from fixtures
        cy.verifyLogin(this.path.ProductsDom); //method to verify login page (in commands.js file under support folder) 
    })
})

