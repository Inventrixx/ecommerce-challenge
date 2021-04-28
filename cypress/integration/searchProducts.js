/// <reference types="cypress" />;

import {
  getProductsList200,
  getProductDetailt200,
  getErrorProduct,
} from "../fixtures/mockProducts";
import { categories } from "../fixtures/mockCategories";

describe("Main Page", () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    Cypress.Cookies.preserveOnce("connect.sid");
  });

  it("Should go to main page", () => {
    cy.visit("/");
    cy.location("href").should("contain", `/`);
    cy.get(".searchbox-form").should("exist");
  });
});

describe("Search Products Error", () => {
  it("Should show message error", () => {
    const desiredProduct = "celular";
    cy.get(".input-item").type(desiredProduct);
    cy.get(".search-icon-button").click({ force: true });

    cy.intercept("GET", `/items?search=${desiredProduct}`, {
      statusCode: 500,

      body: { results: getErrorProduct },
    });
  });
});

describe("Search Products Ok", () => {
  it("Should search for desired product", () => {
    const desiredProduct = "celular";
    cy.get(".input-item").type(desiredProduct);
    cy.get(".search-icon-button").click({ force: true });

    cy.intercept("GET", `/items?search=${desiredProduct}`, {
      statusCode: 200,
      body: { results: getProductsList200 },
    });
    cy.location("href").should("contain", `/items?search`);
  });
});

describe("Detailed Products", () => {
  it("Should redirect detail product page", () => {
    cy.get(`#${getProductsList200.items[0].id}`).click({
      force: true,
    });

    cy.intercept("GET", `/items/${getProductsList200.items[0].id}`, {
      statusCode: 200,
      body: { results: getProductDetailt200 },
    });
    cy.intercept("GET", `/categories/${getProductDetailt200.category}`, {
      statusCode: 200,
      body: { results: categories },
    });
    cy.location("href").should(
      "contain",
      `/items/${getProductDetailt200.item.id}`
    );
  });
});
