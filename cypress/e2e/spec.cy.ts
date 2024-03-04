import {faker} from '@faker-js/faker';
import 'cypress-file-upload';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const number = faker.number.int({min: 0, max: 23});
const randomEmail = faker.internet.email();
const paragraphs = faker.lorem.paragraphs(1);
let typedValue: any;


describe('Sumbit Form', () => {
  it('passes', () => {
    cy.visit('https://earth-cypress.vercel.app/');
    cy.viewport(window.screen.width, window.screen.height);
    cy.get('.links > .secund-btn')
      .click();
    cy.get('#firstname')
      .type(firstName, {delay: 100});
    cy.get('#lastname')
      .type(lastName, {delay: 100});
    cy.get('#emailaddress')
      .type(randomEmail, {delay: 100});
    cy.get('[for="individu"]')
      .click({force: true});
    cy.get('#time')
      .type(number.toString(), { delay: 100 })
      .invoke('val')
      .then(value => {
        typedValue = value;
        cy.log('Typed value:', typedValue);
      });
    cy.get('#description')
      .type(paragraphs, {delay: 100});
    cy.get('.form-center-custom > div.ng-tns-c247371224-1 > .mat-stepper-next > .mdc-button__label')
      .click()
      .wait(1000);
    cy.get('.form-choices-container > :nth-child(1) > .images-container > :nth-child(1) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.form-choices-container > :nth-child(1) > .images-container > :nth-child(2) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.form-choices-container > :nth-child(1) > .images-container > :nth-child(3) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.form-choices-container > :nth-child(1) > .images-container > :nth-child(4) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.form-choices-container > :nth-child(3) > .mat-stepper-next > .mdc-button__label')
      .click()
      .wait(1000);
    cy.get('.ng-untouched.ng-star-inserted > :nth-child(1) > .images-container > :nth-child(1) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.ng-untouched.ng-star-inserted > :nth-child(1) > .images-container > :nth-child(2) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.ng-untouched.ng-star-inserted > :nth-child(1) > .images-container > :nth-child(3) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.ng-untouched.ng-star-inserted > :nth-child(1) > .images-container > :nth-child(4) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get(':nth-child(5) > .image-description > input.ng-tns-c247371224-1')
      .click()
      .wait(1000);
    cy.get('.ng-untouched.ng-star-inserted > :nth-child(3) > .mat-stepper-next > .mdc-button__label')
      .click()
      .wait(1000);
    const yourBestPicture = 'OeBaring.png';
    cy.get('input[name="images"]')
      .attachFile(yourBestPicture, {subjectType: 'drag-n-drop'});
    cy.get('#permission-ja')
      .click();
    cy.get('#cdk-step-content-0-3 > .form-center-custom > div.ng-tns-c247371224-1 > .next-and-register > .mdc-button__label')
      .click()
      .wait(2000);
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
      .should('contain', 'Inzending Succesvol. Binnen 24 uur zal uw inzending verwerkt worden');
  })
})

describe('Approve Form', () => {
  it('passes', () => {
    cy.visit('https://earth-cypress.vercel.app/admin');
    cy.viewport(window.screen.width, window.screen.height);
    cy.get(':nth-child(2) > .input-field')
      .type('admin', {delay: 100});
    cy.get(':nth-child(3) > .input-field')
      .type('admin', {delay: 100});
    cy.get('.button1')
      .click()
      .wait(2000);
    cy.get('.pending-card')
      .click()
      .wait(2000);
    cy.get(':nth-child(1) > .admin-card > .admin-card-body > .button-group > .btn-approve')
      .click();
  })
})
