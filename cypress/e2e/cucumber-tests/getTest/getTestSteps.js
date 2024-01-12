import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

var response;

Given ('I make a request', ()=>{
    cy.request("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a")
    .then((res)=>{
        response = res;
    })
});

Then ('I show list.name value', ()=>{
    cy.log(response.body.data.list.name);
});

And('Valid the statusCode', ()=>{
    expect(response.status).to.eq(200);
})