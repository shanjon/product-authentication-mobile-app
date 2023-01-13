/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct($id: ID!) {
    createProduct(id: $id) {
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
export const updateProductState = /* GraphQL */ `
  mutation UpdateProductState($id: ID!, $transition: String!) {
    updateProductState(id: $id, transition: $transition) {
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
