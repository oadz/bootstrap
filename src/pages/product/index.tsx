import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchProducts, productSelector, reset } from "@/store/productSlice";
import { GetServerSideProps } from "next";
import { Button } from "react-bootstrap";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(productSelector);
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
        <Button onClick={handleFetchProduct}>Fetch</Button>
        <Button variant="dark" onClick={handleResetProduct}>
          Reset
        </Button>
        {status === "failed" && <p>Error this now</p>}
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
