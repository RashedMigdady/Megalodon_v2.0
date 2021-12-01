export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};


export const addSubscription = (subscription) => {
  return {
    type: "ADD_TO_SUBSCRIPTION",
    payload: subscription,
  };
};

export const removeSubscription = (provider) => {
  return {
    type: "REMOVE_SUBSCRIPTION",
    payload: provider,
  };
};






