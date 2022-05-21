import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  var total = (totalPrice * totalQuantities).toFixed(2);

  const [disc, setDisc] = React.useState(0);

  const discount = () => {
    if (disc === "LUCKY") {
      total = total - (total * 15) / 100;
      alert("COUPN APPLYED");
      setValue(total.toFixed(2));
    } else {
      alert("WRONG COUPN");
    }
  };
  const orderPlaced = () => {
    alert("ORDER PLACED");
    products.map((el) => {
      dispatch({ type: "REMOVE", payload: el.id });
    });
    navigate("/");
  };
  function show1() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("hide").style.display = "none";
  }
  function show2() {
    document.getElementById("hide").style.display = "block";
    document.getElementById("div1").style.display = "none";
  }

  return (
    <>
    <div className="coupn"><h3>Get Discount Apply Coupn: LUCKY</h3></div>
      <div className="checkout-container">
        <div className="checkout-form">
          <h1 style={{ marginTop: "2%" }}>Customer Info</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
            />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Phone" variant="standard" />
            <TextField
              style={{ width: "60%" }}
              id="standard-basic"
              label="Address"
              variant="standard"
            />
          </Box>
          <h1>Payment Info</h1>

          <FormControl style={{ marginLeft: "2%" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Debit"
                control={<Radio />}
                label="Debit Card"
                onClick={show2}
              />
              <FormControlLabel
                value="upi"
                control={<Radio />}
                label="UPI"
                onClick={show1}
              />
            </RadioGroup>
          </FormControl>

          <div id="div1" style={{ display: "none" }}>
            <TextField
              style={{ width: "60%", marginLeft: "2%", marginTop: "5%" }}
              name="upi"
              label="Enter UPI ID"
              variant="standard"
            />
          </div>
          <div id="hide" style={{ display: "none" }}>
            <TextField
              style={{ width: "60%", marginLeft: "2%", marginTop: "2%" }}
              name="upi"
              label="Card Number"
              variant="standard"
            />
            <TextField
              style={{ width: "20%", marginLeft: "2%", marginTop: "2%" }}
              label="CVV"
              variant="standard"
            />
            <TextField
              style={{ marginLeft: "2%", marginTop: "5%" }}
              type="number"
              label="Month"
              variant="standard"
            />
            <TextField
              style={{ marginLeft: "2%", marginTop: "5%" }}
              type="year"
              label="Year"
              variant="standard"
            />
          </div>
        </div>
        <div className="checkout-payment">
          <h1 style={{ marginTop: "2%" }} className="text-center">
            Current Cart
          </h1>
          <Link to="/cart">
            <h1 className="text-center">Return to Cart</h1>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "6%",
            }}
          >
            <div style={{ color: "hotpink" }}>
              <h2 className="text-center">Total Item:</h2>
              <h2 className="text-center">Total Price:</h2>
            </div>
            <div style={{ color: "#5d95cd" }}>
              <h2>{totalQuantities}</h2>
              <h2>₹ {total}</h2>
            </div>
          </div>
          <div
            style={{
              margin: "auto",
              marginTop: "8%",
              width: "70%",
            }}
          >
            <TextField
              style={{ width: "60%", fontSize: "18px" }}
              id="standard-basic"
              label="ENTER COUPN"
              variant="standard"
              onChange={(e) => setDisc(e.target.value)}
            />
            <Button
              onClick={discount}
              style={{
                fontSize: "18px",
                marginLeft: "5%",
                marginTop: "1%",
                padding: "5px 25px",
              }}
              variant="outlined"
            >
              APPLY
            </Button>

            <div className="pay">
              <button onClick={orderPlaced}>Pay: {value}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
