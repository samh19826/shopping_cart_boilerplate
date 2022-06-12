
const products = (state=[], action) => {
  switch(action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default products;