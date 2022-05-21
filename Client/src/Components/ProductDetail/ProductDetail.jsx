import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SelectedProd, RemoveProd } from "../../Redux/Actions/ProdAction";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { BsDash, BsPlus } from "react-icons/bs";

export const ProdctDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  console.log("pro",id)
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://anand-mehta.herokuapp.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(SelectedProd(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(RemoveProd());
    };
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>
          <Skeleton />
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">₹{price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="details__info">
                  <div className="details__incDec">
                    <span className="dec" onClick={decQuantity}>
                      <BsDash />
                    </span>
                    <span className="quantity">{quantity}</span>
                    <span
                      className="inc"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <BsPlus />
                    </span>
                    <button
                      className="btn-default"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { product, quantity },
                        })
                      }
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
