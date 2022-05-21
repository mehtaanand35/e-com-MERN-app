import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { MenProd } from "../../Redux/Actions/ProdAction";
import { useEffect } from "react";
import { MenComponent } from "./MenComponent";
export const MenClothes = () => {
  const products = useSelector((state) => state.allProducts.menprods);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    const res = await axios
      .get("https://anand-mehta.herokuapp.com/mens")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(MenProd(res.data));
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="ui grid container">
      <MenComponent />
    </div>
  );
};
