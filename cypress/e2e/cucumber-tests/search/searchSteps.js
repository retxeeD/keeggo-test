import {Given, Then } from "cypress-cucumber-preprocessor/steps";

Given ('I open google page', ()=>{
    cy.visit("https://www.google.com/", {timeout: 3000});
});

Then ('I type keeggo', ()=>{
    cy.get('#APjFqb').type('keeggo{enter}')
});