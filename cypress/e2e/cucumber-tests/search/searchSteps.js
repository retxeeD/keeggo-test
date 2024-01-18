import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given ('I open automationexercise login page', ()=>{
    cy.visit("https://www.automationexercise.com/login");
});

And ('I type login data', ()=>{
    cy.get('[data-qa="login-email"]').type('teste2021@teste.com.br')
    cy.get('[data-qa="login-password"]').type('teste{enter}')
});

When ('I click in products', ()=>{
    cy.contains('Products').click();
});

And ('I search for a product in the search bar', ()=>{
    cy.get('#search_product').type('blue top{enter}');
})

And ('I put the product in my cart', ()=>{
    cy.contains('Add to cart').click();
})

Then ('I valid the product in my cart', ()=>{
    cy.contains('View Cart').click();
    cy.contains('Blue Top').should('exist');
})