import React from "react";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

function CartItems() {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
      <div className=" flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-yop"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjAeo2Ti7Puq_G01IioaE39GxYhZPcgb0tLHypq2KpbbBqcSR4A7pVNw&s=10i"
            alt="image"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className=" font-semibold">Lorem ipsum dolor sit amet.</p>
          <p className="font-semibold opacity-45">size : L,White</p>
          <p className="font-semibold opacity-45">
            Seller: Crishtaliyo sachin{" "}
          </p>
          <div className="flex space-x-2 mt-4 cursor-pointer">
            <p className="line-through opacity-50 font-semibold">₹1755</p>
            <p className="font-black font-bold ">₹499</p>
            <p className="font-semibold text-green-600">72% off</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-8 mt-2">
        <div className="flex items-center gap-4">
          <button className=" cursor-pointer text-[#9155fd] hover:text-[#7e3af2] transition-colors duration-300">
            <DoDisturbOnOutlinedIcon />
          </button>

          <span className="text-xl font-semibold">1</span>

          <button className=" cursor-pointer text-[#9155fd] hover:text-[#7e3af2] transition-colors duration-300">
            <AddCircleOutlineRoundedIcon />
          </button>
        </div>
        <button className="font-semibold cursor-pointer text-[#9155fd]">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItems;
