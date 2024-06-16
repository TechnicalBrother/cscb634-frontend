import React from 'react';
import styled from 'styled-components';

const ProductList = ({ itemList, addToBasket }) => {
  return (
    <ProductListContainer id="productList">
      {itemList.map((item) => (
        <Product key={item.name}>
          <ProductTopBar>
            <ProductTitle>{item.name}</ProductTitle>
            <ProductPriceRating> £{item.price.toFixed(2)} ({item.rating}/5)</ProductPriceRating>
          </ProductTopBar>
          <ProductImage src={"/Assets/Product_Images/" + item.image_link} alt={item.name} />
          {item.quantity > 0 ? (
            <ProductButton value={item.id} onClick={() => addToBasket(item.id)}>Add to basket</ProductButton>
          ) : (
            <ProductButton disabled={true}>Out of Stock</ProductButton>
          )}
        </Product>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  display: grid;
  padding: 0px 20px 20px 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 280px;
  row-gap: 10px;
  column-gap: 10px;
`;

const Product = styled.div`
  width: 200px;
  height: 280px;
  place-self: center;
`;

const ProductTopBar = styled.div`
  height: 45px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`;

const ProductPriceRating = styled.p`
  font-size: 16px;
  margin: 0px;
  padding: 0px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

const ProductButton = styled.button`
  width: 200px;
  height: 25px;
`;