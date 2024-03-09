import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { axiosApi } from "../api/axios";

const FilterProducts = ({ setParams }) => {
  const [filter, setFilter] = useState({
    filterName: "",
    filterParams: "",
  });
  const [brandsProducts, setBrandsProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [priceProducts, setPriceProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchFilters = useCallback(async (name, filter) => {
    try {
      if (filter.length === 0) {
        const { data } = await axiosApi.post("/", {
          action: "get_fields",
          params: { field: name },
        });

        if (filter === priceProducts) {
          const priceList = data?.result
            .filter((value) => value !== null)
            .sort((a, b) => a - b);
          return setPriceProducts([...new Set(priceList)]);
        }

        const result = data?.result
          .filter((value) => value !== null)
          .sort((a, b) => a.localeCompare(b));

        if (filter === brandsProducts) {
          setBrandsProducts([...new Set(result)]);
        }
        if (filter === productsList) {
          setProductsList([...new Set(result)]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addFilterOptions = () => {
    setSearchParams({
      filter: filter.filterName,
      name: filter.filterParams,
    });
  };

  const clearFilterOptions = () => {
    setFilter({
      filterName: "",
      filterParams: "",
    });
    setParams({
      page: 1,
      limit: 50,
    });
  };

  return (
    <>
      <aside className="filter">
        <div className="filter-item">
          <h4>Бренды</h4>
          <select
            className="filter-select"
            name="brand"
            id="brand"
            value={filter.filterParams}
            onChange={(event) =>
              setFilter({
                filterParams: event.target.value,
                filterName: "brand",
              })
            }
            onClick={() => fetchFilters("brand", brandsProducts)}
          >
            <option value="">Открыть список</option>
            {brandsProducts.length > 0 &&
              brandsProducts.map((item) => (
                <option key={item} value={item} className="filter-option">
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="filter-item">
          <h4>Название</h4>
          <select
            className="filter-select"
            name="product"
            id="product"
            value={filter.filterParams}
            onChange={(event) =>
              setFilter({
                filterParams: event.target.value,
                filterName: "product",
              })
            }
            onClick={() => fetchFilters("product", productsList)}
          >
            <option value="">Открыть список</option>
            {productsList.length > 0 &&
              productsList.map((item) => (
                <option key={item} value={item} className="filter-option">
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="filter-item">
          <h4>Цена</h4>
          <select
            className="filter-select"
            name="price"
            id="price"
            value={filter.filterParams}
            onChange={(event) =>
              setFilter({
                filterParams: event.target.value,
                filterName: "price",
              })
            }
            onClick={() => fetchFilters("price", priceProducts)}
          >
            <option value="">список цен</option>
            {priceProducts.length > 0 &&
              priceProducts.map((item) => (
                <option key={item} value={item} className="filter-option">
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="filter-btn">
          <button className="btn-clear" onClick={clearFilterOptions}>
            Очистить
          </button>
          <button className="btn-add" onClick={addFilterOptions}>
            Применить
          </button>
        </div>
      </aside>
    </>
  );
};

export default React.memo(FilterProducts);
