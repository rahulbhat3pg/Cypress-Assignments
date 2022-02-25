//Visit Flipkart website and use mouse hover and apply filter
describe('Visit Flipkart and perform MouseHover and apply PriceFilter', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData_Flipkart').then(data => { // 'TestData_Flipkart'(file name) under fixtures(folder) having data
            this.data = data;
        })
    });


    it("MouseHover and apply filter", function () {
        cy.visit(this.data.url); //method (in command.js(file) under support(folder)) to visit the website 
        cy.contains(this.data.MouseOverElement_Text).trigger('mouseover'); //locating element and trigger mouse over by fetching data from fixtures 
        cy.contains(this.data.MouseOverElement_Text1).trigger('mouseover'); //locating element and trigger mouse over by fetching data from fixtures 
        cy.contains(this.data.MouseOverElement_Text2).click(); //locating element and clicking it by fetching data from fixtures
        cy.get(this.data.Price_Range).first().select(this.data.MinPrice); //selecting the min. price range by fetching data from fixtures
        cy.get(this.data.Price_Range).last().select(this.data.MaxPrice);//selecting the max. price range by fetching data from fixtures
        cy.get(this.data.TotalProducts_Locator).should('contain.text', this.data.TotalProducts_Value); // asserting total no. of products(fetching data from fixtures)
        cy.contains(this.data.SortPrice_HighToLow).click(); //sorting by product price high to low (fetching data from fixtures)
        cy.get(this.data.HighestProductName_Locator).should('contain.text', this.data.HighestProduct_Title);
        //asserting the name of product with highest price(fetching data from fixtures)
        cy.get(this.data.HighestProductPrice_Locator).first().should('contain.text', this.data.HighestProduct_Price);
        //asserting the price of product with highest price(fetching data from fixtures)
    })
});


