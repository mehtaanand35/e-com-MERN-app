import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const MenComponent = () => {
  const products = useSelector((state) => state.allProducts.menprods);
  const render = products.map((el) => {
    const { _id, title, image, price, category } = el;
    return (
      <div className="four wide column" key={_id}>
        <Link to={`/MenClothes/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">₹ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
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
  const navigate = useNavigate();
  function handleFilter(e) {
    console.log("fil", e.target.value);
    let x = e.target.value;
    if (x === "electronics") {
      navigate("/Electronics");
    } else if (x === "jewelery") {
      navigate("/Jewellerys");
    } else if (x === "men") {
      navigate("/MenClothes");
    } else if (x === "women") {
      navigate("/WomenClothes");
    } else if (x === "all") {
      navigate("/");
    }
  }
  return (
    <div>
      <div className="sortbtn">
        <Stack spacing={2} direction="row">
          <Button
            onClick={() => {
              handleSort("asc", "price");
            }}
            variant="outlined"
          >
            Price Low
          </Button>
          <Button
            onClick={() => {
              handleSort("dsc", "price");
            }}
            variant="outlined"
          >
            Price High
          </Button>
        </Stack>
        <select
          onChange={handleFilter}
          style={{
            marginLeft: "1%",
            border: "1px solid #5391db",
            color: "#5391db",
            borderRadius: "8%",
          }}
          class="ui dropdown"
        >
          <option value="">Category</option>
          <option value="all">All Category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="electronics">Electronic</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      <div className="render">{render}</div>
    </div>
  );
};
