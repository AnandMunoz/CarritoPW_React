import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import NavBar from "../NavBar/NavBar";
import CartElements from "./CartElements"
import CartTotal from "./CartTotal";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
    <NavBar/>
    {cart.length > 0 ? (
      <>
      <CartElements />
      <CartTotal/>
      </>
    ) : (
      <h2 className="cart-message-center">Su carrito está vacío</h2>
    )}
    </>
  );
};



export default CartContent