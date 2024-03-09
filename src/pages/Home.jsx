import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { axiosApi } from "../api/axios";
import FilterProducts from "../components/FilterProducts";
import Pagination from "../components/Pagination";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [ids, setIds] = useState(null);
  const [offset, setOffset] = useState(+searchParams.get("page") || 1);
  const [limit, setLimit] = useState(+searchParams.get("limit") || 50);
  const params = {
    action: "get_ids",
    params: { offset, limit },
  };
  const [isFetchApiError, setIsFetchApiError] = useState(false);
  const [props, setProps] = useState("");

  useEffect(() => {
    if (searchParams.size === 0) {
      fetchApi(params);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get("filter") && searchParams.get("name")) {
      let param = {
        action: "filter",
        params: {
          [searchParams.get("filter")]:
            searchParams.get("filter") === "price"
              ? +searchParams.get("name")
              : searchParams.get("name"),
        },
      };

      setOffset(1);

      fetchApi(param);
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.has("page") && searchParams.has("limit")) {
      const param = {
        action: "get_ids",
        params: {
          "offset": +searchParams.get("page"),
          "limit": +searchParams.get("limit"),
        },
      };
      fetchApi(param);
    }
  }, [searchParams]);

  const fetchApi = async (param) => {
    try {
      const { data } = await axiosApi.post("/", param);

      setIds([...new Set(data?.result)]);
    } catch (error) {
      console.log(error.message);
      setIsFetchApiError(true);
    }
  };

  useEffect(() => {
    if (isFetchApiError) {
      fetchApi(params);
      setIsFetchApiError(false);
    }
  }, [isFetchApiError]);

  useEffect(() => {
    if (ids?.length > 0) {
      setProps({
        id: ids,
        action: "get_items",
        params: { ids },
      });
    }
  }, [ids]);

  return (
    <>
      <div className="container">
        <div className="content">
          <FilterProducts setParams={setSearchParams} />
          <ProductItem props={props} />
        </div>
        {!searchParams.has("filter") && (
          <Pagination
            currentPage={offset}
            setCurrentPage={setOffset}
            limit={limit}
          />
        )}
      </div>
    </>
  );
};

export default Home;
