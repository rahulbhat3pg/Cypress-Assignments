//Display error message if required fields are left empty

describe('verifyProductShippingAndPaymentInfo', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData').then(credentials => { // 'TestData'(file name) under fixtures(folder) having data
            this.credentials = credentials;
        })
        cy.fixture('Locators').then(path => { //'Locators'(file name) under fixtures(folder) having data
            this.path = path;
        })

    });

    it("DisplayErrorMessage", function () {
        cy.login(this.credentials.Username1, this.credentials.PasswordAll); //method to login (in commands.js file under support folder) user1 with data fetched from fixtures 
        cy.get(this.path.Product_Name);
        cy.get(this.path.CartLink).click();
        cy.get(this.path.CheckoutButton).click();
        cy.get(this.path.ContinueButton).click();
        cy.get(this.path.ErrorMessage).then(function (errorMessage) { //method to display error message 'text' in test runner 
            expect(errorMessage.text()).to.eq(this.credentials.ErrorMessage)
        })

    })
})  