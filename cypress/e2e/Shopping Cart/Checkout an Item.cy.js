describe('Checkout an Item', () => {
    it('Checkout an Item ', () => {
    // Visit the website
      cy.visit('https://www.saucedemo.com/v1/')

    // Login as standard_user
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('#login-button').click()

    // Add items to cart
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
      cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
      cy.get('.fa-layers-counter').should('contain', '2')

    // Verify the correct items in the cart
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 2);
    cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    cy.get('.cart_item').should('contain', 'Sauce Labs Bike Light');

    // Complete checkout process
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('Afsana')
    cy.get('[data-test="lastName"]').type('Afrin')
    cy.get('[data-test="postalCode"]').type('1000')
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()

    // Verify checkout complete
    cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    })
  }) 