import React from "react";
import { TfiFaceSad } from "react-icons/tfi";
import { toast } from "react-toastify";

const Cart = ({ cards, setCards }) => {
  const totalPrice = cards.reduce((sum, item) => sum + item.price, 0);
  const handleDelete = (card) => {
    const newArray = cards.filter((c) => c.id !== card.id);
    setCards(newArray);
    toast.error(`${card.name} is removed`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };
  const handlePayment = () => {
    setCards([]);
    toast.success("Payment successful", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
    });
  };

  return (
    <div className="w-full md:w-[70%] mx-auto my-13 border-2 border-gray-100 rounded-lg p-10 space-y-5">
      {/* Heading */}
      <h2 className="font-bold text-3xl">Your carts</h2>

      {cards.length === 0 ? ( // while card is empty
        <div className="flex flex-col justify-center items-center gap-3 py-7">
          <TfiFaceSad className="size-19 text-center" />
          <p className="text-xl text-center opacity-65">Your cart is empty</p>
        </div>
      ) : (
        // while card is not empty
        <>
          {/* Each selected cart */}
          {cards.map((card) => {
            return (
              <div className="flex justify-between items-center bg-base-200 rounded-box shadow-md p-5">
                <div className="flex gap-3">
                  <div>
                    <img className="size-12 rounded-box" src={card.icon} />
                  </div>
                  <div>
                    <div className="font-semibold">{card.name} </div>
                    <div className="text-sm font-semibold opacity-60">
                      {`$${Math.round(card.price)}`}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(card)}
                  className="btn btn-error btn-outline"
                >
                  Remove
                </button>
              </div>
            );
          })}
          {/* Total */}
          <div className="flex justify-between items-center mx-3">
            <p className="opacity-60">Total:</p>
            <p className="text-2xl font-semibold"> ${totalPrice}</p>
          </div>

          {/* Button */}
          <button
            onClick={handlePayment}
            className="btn btn-primary w-full rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
