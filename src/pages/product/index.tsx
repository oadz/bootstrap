import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  fetchProducts,
  productSelector,
  reset,
  getAllCatagoryProducts,
} from "@/store/productSlice";
import { GetServerSideProps } from "next";
import { Button, Card } from "react-bootstrap";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error, catagory } = useSelector(productSelector);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getAllCatagoryProducts());
    // setCompleteData(data);
  }, [dispatch]);
  const [completeData, setCompleteData] = useState(data);
  useEffect(() => {
    setCompleteData(data);
  }, [data]);
  console.log("data", data);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  console.log("catagory", catagory);
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  const handleFetchProduct = () => {
    dispatch(fetchProducts());
    setCompleteData(data);
  };
  const handleResetProduct = () => {
    dispatch(reset());
  };
  // const categoryCounts = data.reduce((counts: any, product) => {
  //   counts[product.category] = (counts[product.category] || 0) + 1;
  //   return counts;
  // }, {});

  // const duplicatedCategories = Object.keys(categoryCounts).filter(
  //   (category) => categoryCounts[category] > 1
  // );
  const handleCategory = (props: string) => {
    console.log("handleCategory", props);
    if (props) {
      const datafilter = data.filter((datas: any) => {
        return datas.category === props;
      });
      return setCompleteData(datafilter);
    }
  };
  console.log("completeData", completeData);
  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        {" "}
        <h1>ProductList with createAsyncThunk</h1>{" "}
        <div>
          {" "}
          <Button onClick={handleFetchProduct}>Fetch</Button>
          <Button variant="dark" onClick={handleResetProduct}>
            Reset
          </Button>
        </div>
      </div>{" "}
      {catagory.map((product) => (
        <Button
          className="flex col-auto mb-3"
          // key={product.id}
          onClick={() => handleCategory(product)}
        >
          {product}
        </Button>
      ))}
      <div>
        {status === "succeeded" && (
          <div className=" flex row align-items-start gap-3">
            {completeData.map((product) => (
              <Card
                style={{ width: "18rem" }}
                key={product.id}
                className="col-6"
              >
                {/* <Card.Img
                  variant="top"
                  src={product.image}
                  // width={150}
                  style={{ width: 150, height: 150 }}
                /> */}
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.category}</Card.Text>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
