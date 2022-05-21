import { Link } from "react-router-dom";
// import { Cart } from "../Cart/Cart";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import { logout } from "../../Redux/Reducer/AuthReducer";
import { connect } from "react-redux";
const NavBar = ({ logout, isAuth }) => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>ApnaShop</h2>
        </Link>
        <Link to="/MenClothes">
          <h4>Men's Clothes</h4>
        </Link>
        <Link to="/WomenClothes">
          <h4>Women's Clothes</h4>
        </Link>
        <Link to="/Electronics">
          <h4>Electronics</h4>
        </Link>
        <Link to="/Jewellerys">
          <h4>Jewellerys</h4>
        </Link>
        <div className="nav__right">
          <Link to="/cart">
            <div className="basket">
              <BsFillBagFill className="cart-icon" />
              <span
                style={{
                  color: "white",
                  background: "deeppink",
                  opacity: "0.7",
                }}
              >
                {totalQuantities}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {isAuth && (
        <div
          className="login-signup"
          style={{
            position: "relative",
            right: "6%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ color:"#5d95cd",cursor:"pointer"}}>
            <h4 className="logout-btn" onClick={()=>{
              logout()
            }}>LogOut</h4>
          </div>
          {/* <div>
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          </div> */}
        </div>
      )}
      {!isAuth && (
        <div
          className="login-signup"
          style={{
            position: "relative",
            right: "6%",
            display: "flex",
            alignItems: "center",
            marginBottom: "1%",
          }}
        >
          <div style={{ marginRight: "15%" }}>
            <Link to="/signup">
              <h4>SignUp</h4>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.AuthReducer.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(NavBar);
