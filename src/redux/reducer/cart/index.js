const intialCart = {
  items: JSON.parse(localStorage.getItem("savedData")) || [] ,
  subscription : JSON.parse(localStorage.getItem("subscription")) || [],
};

const cart = (state = intialCart, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, payload],
        
      };

    case "REMOVE_ITEM":
      let new_items = state.items.filter((item) => payload !== item.id);
      localStorage.setItem("savedData", JSON.stringify([...new_items]));
      return {
        items: [...new_items],
        
      };

      case "ADD_TO_SUBSCRIPTION":
        return {
          subscription: [...state.subscription, payload],
          
        };

      case "REMOVE_SUBSCRIPTION":
        let new_subscription = state.subscription.filter((subscription) => payload !== subscription.provider);
        localStorage.setItem("subscription", JSON.stringify([...new_subscription]));
        return {
          subscription: [...new_subscription],
          
        };

    default:
      return state;
  }
};

export default cart;
