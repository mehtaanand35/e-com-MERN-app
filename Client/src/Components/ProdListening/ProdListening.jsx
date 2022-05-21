import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetProd } from "../../Redux/Actions/ProdAction";
import { useEffect } from "react";
import { ProductComponent } from "../ProdComponents/ProdComponents";
import * as React from "react";
import Stack from "@mui/material/Stack";

import { useState } from "react";

import Pagination from "@mui/material/Pagination";

export const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    const res = await axios
      .get(`https://anand-mehta.herokuapp.com/products`)
      .catch((err) => {
        console.log("err:", err);
      });
    dispatch(SetProd(res.data));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const [change, setChange] = useState(false);

  const handleSort = (sort, value) => {
    if (sort === "asc" && value === "price") {
      products.sort((a, b) => a.price - b.price);
      setChange(!change);
    }

    if (sort === "dsc" && value === "price") {
      products.sort((a, b) => b.price - a.price);
      setChange(!change);
    }
  };

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
