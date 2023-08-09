import React, { useReducer } from 'react';

// Define the initial state of the cart
const initialState = {
  items: [],
  total: 0,
  discount: 0,
};

// Define the actions that can be dispatched
const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
  APPLY_DISCOUNT: 'APPLY_DISCOUNT',
};

// Reducer function to handle cart state updates based on actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case cartActions.APPLY_DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };
    default:
      return state;
  }
};

const CartAction = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Helper function to calculate the cart total after applying discounts
  const calculateTotal = () => {
    const subtotal = cartState.items.reduce((acc, item) => acc + item.price, 0);
    const totalAfterDiscount = subtotal - cartState.discount;
    return totalAfterDiscount >= 0 ? totalAfterDiscount : 0;
  };

  // Function to handle adding items to the cart
  const addItemToCart = (item) => {
    dispatch({ type: cartActions.ADD_ITEM, payload: item });
  };

  // Function to handle applying discounts to the cart
  const applyDiscount = (discountAmount) => {
    dispatch({ type: cartActions.APPLY_DISCOUNT, payload: discountAmount });
  };

  // Sample item data (You can replace this with your own items)
  const itemsData = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {itemsData.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart Summary</h3>
      <p>Total Items: {cartState.items.length}</p>
      <p>Subtotal: ${cartState.items.reduce((acc, item) => acc + item.price, 0)}</p>
      <p>Discount: ${cartState.discount}</p>
      <p>Total: ${calculateTotal()}</p>

      <button onClick={() => applyDiscount(5)}>Apply $5 Discount</button>
      <button onClick={() => applyDiscount(10)}>Apply $10 Discount</button>
    </div>
  );
};

export default CartAction;
