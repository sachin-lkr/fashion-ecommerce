import React from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate =useNavigate()
  const handleCheckOut=()=>{
   navigate("/checkout?step=2")
  }
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 gap-4 relative">
        <div className="col-span-2 space-y-3">
          <CartItems />
         
        </div>
        <div className="px-5 sticky top-0 cff  shadow-2xl lg:mt-0 py-5">
          <div className=" space-y-6">
            <h1 className="font-bold opacity-45">PRICE DETAILS</h1>
            <hr />
            <div className=" space-y-2">
              <div className="flex justify-between">
                <p className="font-semibold">Price (3)</p>
                <p className="font-bold">₹4695</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Discount</p>
                <p className="font-semibold text-green-600">-₹469</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Delivery Charges</p>
                <p className="font-semibold text-green-600">Free</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="font-bold">Total Amount</p>
                <p className="font-bold text-green-600">₹469</p>
              </div>
            </div>
            <div className="w-full bg-[#9155fd] text-white font-semibold flex justify-center py-2 rounded-xl cursor-pointer hover:bg-[#7e3af2] transition-all duration-300 ">
              <button onClick={handleCheckOut}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
