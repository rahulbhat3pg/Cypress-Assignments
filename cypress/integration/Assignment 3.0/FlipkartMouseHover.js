//Visit Flipkart website and use mouse hover and apply filter
describe('Visit Flipkart and perform MouseHover and apply PriceFilter', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData_Flipkart').then(pathF => { // 'TestData_Flipkart'(file name) under fixtures(folder) having data
            this.pathF = pathF;
        })
    });


    it("MouseHover and apply filter", function () {
        cy .visit(this.pathF.url);
        //cy.mouseOver('this.pathF.Mou seOverElement_Locator','this.pathF.MouseOverElement_Text');
        cy.get('.xtXmba').contains('Electronics').invoke('show').trigger('mouseover').should('be.visible');
        cy.get('._6WOcW9._2-k99T').invoke('show').trigger('mouseover').should('be.visible');
        cy.get('._3XS_gI').contains('Laptop Keyboards').should('be.visible').click();
    })
});
