import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchProducts, productSelector, reset } from "@/store/productSlice";
import { GetServerSideProps } from "next";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(productSelector);
  console.log("data", data);
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  const handleFetchProduct = () => {
    dispatch(fetchProducts());
  };
  const handleResetProduct = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h1>ProductList with createAsyncThunk</h1>
      <ul>
        <button onClick={handleFetchProduct}>fetchProducts</button>;
        <button onClick={handleResetProduct}>resetProducts</button>;
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <div>
            {data.map((product) => (
              <div key={product.id}>{product.title}</div>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
