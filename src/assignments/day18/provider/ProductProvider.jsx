import ProductsContext from "../context/ProductsContext";

const ProductProvider = ({ children }) => {

  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      title: "Mobile",
      price: 20000,
    },
  ];

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;