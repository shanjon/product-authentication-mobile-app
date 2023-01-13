/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const product = /* GraphQL */ `
  query Product($id: ID!) {
    product(id: $id) {
      id
      state
      history {
        manufactured
        inspected
        shipped
        stocked
        labeled
        sold
      }
    }
  }
`;
export const products = /* GraphQL */ `
  query Products {
    products {
      id
      state
      history {
        manufactured
        inspected
        shipped
        stocked
        labeled
        sold
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts {
    product(id: "TEST1234") {
      id
      state
      history {
        manufactured
        inspected
        shipped
        labeled
        stocked
        sold
      }
    }
  }
  `;  