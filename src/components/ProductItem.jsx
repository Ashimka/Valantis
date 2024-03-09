import React from "react";
import { useEffect, useState } from "react";
import { axiosApi } from "../api/axios";
import LoadingProducts from "./LoadingProducts";

const ProductItem = ({ props }) => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.id) {
      fetchProduct();
    }
  }, [props.id]);

  useEffect(() => {
    if (isError) {
      fetchProduct();
      setIsError(false);
    }
  }, [isError]);

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      if (props.id?.length) {
        const { data } = await axiosApi.post("/", {
          action: props.action,
          params: props.params,
        });

        setProducts(data?.result);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      setIsError(true);
    }
  };

  return (
    <>
      {isLoading && <LoadingProducts />}
      {products && !isLoading && (
        <div className="products">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter(
                  (value, index, self) =>
                    index === self.findIndex((t) => t.id === value.id)
                )
                .map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.brand}</td>
                    <td>{product.product}</td>
                    <td>{product.price} ₽</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductItem;
