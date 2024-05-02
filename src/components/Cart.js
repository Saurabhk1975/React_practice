import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelCartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center text-xl m-4 p-4 font-bold">
      <h1>Cart 🛒</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-gray-400 p-1 rounded-lg mt-2"
          onClick={handelCartClear}
        >
          clear
        </button>
        {cartItem.length === 0 && (
          <h1 className="my-8">
            Your Cart is empty Please add some items..😍🍇
          </h1>
        )}
        <CartItems items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
