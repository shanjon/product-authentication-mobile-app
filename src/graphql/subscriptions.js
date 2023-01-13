/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createdProduct = /* GraphQL */ `
  subscription CreatedProduct {
    createdProduct {
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
export const updatedProductState = /* GraphQL */ `
  subscription UpdatedProductState {
    updatedProductState {
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
