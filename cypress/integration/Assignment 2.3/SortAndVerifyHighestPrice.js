//Add the product with highest cost by using the price filter
describe('SortAddProductAndVerify', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData').then(credentials => { //'TestData'(file name) under fixtures(folder) having data
            this.credentials = credentials;
        })
        cy.fixture('Locators').then(path => { //'Locators'(file name) under fixtures(folder) having data
            this.path = path;
        })


    });

    it("SortAddProductAndVerify", function () {
        cy.login(this.credentials.Username1, this.credentials.PasswordAll); //method (in command.js(file) under support(folder)) to login user1 with data fetched from fixtures
        cy.get(this.path.Filter).select('hilo'); //sorting products by clicking filter 
        cy.get(this.path.Product_Name_Highest).click(); //adding a product to cart 
        cy.verifyItemDetails(this.path.CartLink, this.path.ItemName, this.credentials.ProductNameHigh, this.path.ItemPrice, this.credentials.HighestProductPrice); //method(in command.js(file) under support(folder)) to verify the details of item added in cart


    })
});
