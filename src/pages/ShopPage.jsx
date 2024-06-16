import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList';
import itemList from '../Assets/random_products_175.json';
import styled from 'styled-components';
import ShoppingBasketIcon from '../Assets/shopping-basket.png';
import Button from '../components/Button';
import Input from '../components/fields/Input';
import { Header, Form } from "../SharedStyledComponents";

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProducts, setSearchedProducts] = useState(itemList);
  const [sortTerm, setSortTerm] = useState('AtoZ');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isInPay, setIsInPay] = useState(false);
  const [basketItems, setBasketItems] = useState(itemList.map((item) => ({
    product: item,
    quantity: 0,
  })));
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [CVV, setCVV] = useState('');

  useEffect(() => updateSearchedProducts(), [searchTerm, sortTerm, inStockOnly]);

  const handleSubmit = () => {
    alert('Success!');
  };

  const showBasket = () => {
    let areaObject = document.getElementById('shopping-area');
    if (areaObject !== null) {
      areaObject.style.display = 'block';
    }
  };

  const hideBasket = () => {
    let areaObject = document.getElementById('shopping-area');
    if (areaObject !== null) {
      areaObject.style.display = 'none';
    }
  };

  const handleBasket = (id, isAdd) => {
    setBasketItems((prev) => {
      const newItems = prev.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: isAdd ? item.quantity + 1 : item.quantity - 1 };
        }
        return item;
      });
      return newItems;
    });
  };

  const calculateTotal = () => {
    const total = basketItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
    return total.toFixed(2);
  };

  const updateSearchedProducts = () => {
    let holderList = itemList;

    let filteredProducts = holderList.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!inStockOnly || product.quantity > 0)
    );

    let sortedProducts = filteredProducts.sort((a, b) => {
      switch (sortTerm) {
        case 'AtoZ':
          return a.name.localeCompare(b.name);
        case 'ZtoA':
          return b.name.localeCompare(a.name);
        case '£LtoH':
          return a.price - b.price;
        case '£HtoL':
          return b.price - a.price;
        case '*LtoH':
          return a.rating - b.rating;
        case '*HtoL':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setSearchedProducts(sortedProducts);
  };

  const resultsIndicator = () => {
    const n = searchedProducts.length;
    const st = searchTerm;
    if (st === '') {
      if (n > 1) {
        return n + " Products";
      } else return "1 Product";
    } else {
      if (n > 1) {
        return n + " Results";
      } else if (n === 1) {
        return "1 Result";
      } else {
        return "No search results found";
      }
    }
  };

  return (<Container>
    {isInPay ?
      <>
        <Header>Finish order</Header>
        <Form onSubmit={handleSubmit}>
          <Input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} label="Card Number" />
          <Input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} label="Expiry date" />
          <Input value={CVV} onChange={(e) => setCVV(e.target.value)} label="CVV" />
          <Button type="submit">Login</Button>
          <Button type="button" onClick={() => {
            setIsInPay(false)
          }} >Go back</Button>
        </Form>
      </> :
      <>
        <LogoBar>
          <LogoArea>
            NBU shop
          </LogoArea>
          <ShoppingIconArea>
            <img id="shopping-icon" onClick={showBasket} src={ShoppingBasketIcon} alt="Shopping Basket" />
          </ShoppingIconArea>
          <ShoppingArea id="shopping-area">
            <ExitArea>
              <ExitIcon onClick={hideBasket}>x</ExitIcon>
            </ExitArea>
            {basketItems.filter((item) => item.quantity > 0).map((item) => (
              <ShoppingRow key={item.product.id}>
                <ShoppingInformation>
                  <p>{item.product.name} (£{item.product.price.toFixed(2)}) - {item.quantity}</p>
                </ShoppingInformation>
                <button onClick={() => handleBasket(item.product.id, false)}>Remove</button>
              </ShoppingRow>
            ))}
            <p>{!basketItems.some(item => item.quantity > 0) ? 'Your basket is empty' : `Total: £${calculateTotal()}`}</p>
            <Button onClick={() => { setIsInPay(true) }}>Pay now</Button>
          </ShoppingArea>
        </LogoBar>
        <SearchBar>
          <input type="text" placeholder="Search..." onChange={changeEventObject => setSearchTerm(changeEventObject.target.value)} />
          <ControlArea>
            <select onChange={(e) => setSortTerm(e.target.value)}>
              <option value="AtoZ">By name (A - Z)</option>
              <option value="ZtoA">By name (Z - A)</option>
              <option value="£LtoH">By price (low - high)</option>
              <option value="£HtoL">By price (high - low)</option>
              <option value="*LtoH">By rating (low - high)</option>
              <option value="*HtoL">By rating (high - low)</option>
            </select>
            <input id="inStock" type="checkbox" onChange={(e) => setInStockOnly(e.target.checked)} />
            <label htmlFor="inStock">In stock</label>
          </ControlArea>
        </SearchBar>
        <ResultsIndicator>{resultsIndicator()}</ResultsIndicator>
        <ProductList itemList={searchedProducts} addToBasket={(id) => handleBasket(id, true)} />
      </>}
  </Container>
  );
}

export default ShopPage;

const Container = styled.div`
  width: 960px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const LogoBar = styled.div`
  position: relative;
  display: flex;
  width: 960px;
  height: 50px;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: center;
`;

const ShoppingIconArea = styled.div`
  width: 35px;
  height: 50px;

  img {
    width: 25px;
    height: 30px;
    margin: 10px 5px 10px 5px;
    cursor: pointer;
  }
`;

const ShoppingArea = styled.div`
  position: absolute;
  right: 0px;
  width: 400px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  z-index: 1;
  display: none;
  top: 0px;
`;

const ExitArea = styled.div`
  width: 400px;
  height: 25px;
`;

const ExitIcon = styled.p`
  position: absolute;
  right: 0px;
  width: 25px;
  margin: 0px 0px 10px 0px;
  cursor: pointer;
`;

const ShoppingRow = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
`;

const ShoppingInformation = styled.div`
  height: 30px;
  flex-grow: 1;

  p {
    margin: 5px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  height: 40px;

  input[type='text'] {
    height: 34px;
    padding: 1px 2px 1px 10px;
    flex-grow: 1;
    font-size: 20px;
  }
`;

const ControlArea = styled.div`
  width: 150px;

  select {
    width: 150px;
  }
`;

const ResultsIndicator = styled.p`
  height: 20px;
  margin: 0px;
  padding: 5px 0px 5px 10px;
`;