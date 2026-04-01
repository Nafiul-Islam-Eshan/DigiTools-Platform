import React from "react";

const Cart = ({ cards }) => {
    const totalPrice = cards.reduce((sum , item)=> sum + item.price, 0 )
//   console.log(cards);
  return (
    <div className="w-full md:w-[70%] mx-auto my-8 border-2 border-gray-100 rounded-lg p-10 space-y-5">
      {/* Heading */}
      <h2 className="font-bold text-3xl">Your carts</h2>

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
            <button className="btn btn-error btn-outline">Remove</button>
          </div>
        );
      })}

      {/* Total */}
      <div className="flex justify-between items-center mx-3">
        <p className="opacity-60">Total:</p>
        <p className="text-2xl font-semibold">
          {" "}
          ${totalPrice}
        </p>
      </div>

      {/* Button */}
      <button className="btn btn-primary w-full rounded-full">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
