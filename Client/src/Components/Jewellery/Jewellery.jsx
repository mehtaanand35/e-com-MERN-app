import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JeweleryProd } from "../../Redux/Actions/ProdAction";
import { useEffect } from "react";
import { JeweleryComponent } from "./JeweleryComponent";

export const Jewellerys = () => {
  const products = useSelector((state) => state.allProducts.jeweleryprods);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    const res = await axios
      .get("https://anand-mehta.herokuapp.com/jewelery")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(JeweleryProd(res.data));
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="ui grid container">
      <JeweleryComponent />
    </div>
  );
};
