import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { ElectronicProd } from "../../Redux/Actions/ProdAction";
import { ElectronicComponent } from "./ElectronicComponents";
export const Electronics = () => {
  const products = useSelector((state) => state.allProducts.electronicprods);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    const res = await axios
      .get("https://anand-mehta.herokuapp.com/electronic")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(ElectronicProd(res.data));
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="ui grid container">
      <ElectronicComponent />
    </div>
  );
};
