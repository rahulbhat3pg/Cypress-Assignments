//Add the product to cart and verify the details of item added in cart
describe('AddToCartAndVerify', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData').then(credentials => { //'TestData'(file name) under fixtures(folder) having data
            this.credentials = credentials;
        })
        cy.fixture('Locators').then(path => { //'Locators'(file name) under fixtures(folder) having data
            this.path = path;
        })
    });

    it("AddToCartAndVerify", function () {
        cy.login(this.credentials.Username1, this.credentials.PasswordAll); //method (in command.js(file) under support(folder)) to login user1 with data fetched from fixtures
        cy.get(this.path.Product_Name).click(); //adding a product to cart 
        cy.verifyItemDetails(this.path.CartLink, this.path.ItemName, this.credentials.ProductName, this.path.ItemPrice, this.credentials.ProductPrice);
        //method(in command.js(file) under support(folder)) to verify the details of item added in cart
    })
});

