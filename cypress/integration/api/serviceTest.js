/// <reference types="cypress" />;

describe("Items routes", () => {
  it("Search query ", () => {
    const params = new URLSearchParams({ q: "mate" });

    cy.request({
      method: "GET",
      url: `/api/items?${params}`,
    }).then((response) => {
      expect(response.body).to.have.all.keys(["author", "items", "categories"]);
      expect(response.body.items).to.be.an("array");
    });
  });

  it("Search item id ", () => {
    const id = "MLA866868025";

    cy.request({
      method: "GET",
      url: `/api/items/${id}`,
    }).then((response) => {
      expect(response.body).to.have.all.keys(["author", "item"]);
      expect(response.body.item).to.be.an("object");
      expect(response.body.author).to.be.an("object");
    });
  });
});

describe("Categories routes", () => {
  it("Search category id ", () => {
    const categoryId = "MLA1055";

    cy.request({
      method: "GET",
      url: `/api/categories/${categoryId}`,
    }).then((response) => {
      expect(response.body).to.be.an("array");
    });
  });
});
