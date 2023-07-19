import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Smartphone",
        description: "Latest Smartphone",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Laptop",
        description: "Latest Laptop",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Smart Watch",
        description: "Latest Smartwatch",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Keyboard",
        description: "Mechanical Keyboard",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;
