import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { WomenProd } from "../../Redux/Actions/ProdAction";
import { WomenComponent } from "./WomenComponents";
export const WomenClothes = () => {
  const products = useSelector((state) => state.allProducts.womenprods);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    const res = await axios
      .get("https://anand-mehta.herokuapp.com/women")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(WomenProd(res.data));
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="ui grid container">
      <WomenComponent />
    </div>
  );
};
