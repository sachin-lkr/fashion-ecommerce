import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "../CheckOut/OrderTracker";
import { Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function OrderDetails() {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="shadow-lg py-15 px-1">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1,1,1,1,1,1]?.map((items)=>{
            return(
                <Grid
          container
          className="shadow-xl rounded-md p-5  w-full"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid size={{ sx: 6 }}>
            <div className="flex gap-5 items-center">
              <img
                className="w-[5rem] h-[5rem] cursor-pointer object-cover object-top"
                src="https://media.gettyimages.com/id/157696797/photo/heap-of-folded-clothes.jpg?s=612x612&w=gi&k=20&c=7QmgLVTHlvkPG7ZLQuwhIDbqZ5jtHfa3pzjjMtXbjgg="
                alt="image"
              />
              <div className="space-y-2">
                <p className="font-bold">Title Lorem, ipsum dolor.</p>
                <div className="flex gap-5 opacity-50">
                  <p>Color: Pink</p>
                  <p>Size:M</p>
                </div>
                <p className="font-semibold">Seller:India</p>
                <p className="font-semibold">₹1090</p>
              </div>
            </div>
          </Grid>
          <Grid size={{ sx: 6 }}>
            <div className="cursor-pointer">
              <StarBorderIcon
                sx={{
                  fontSize: 50,
                  color: "blue", 
                }}
              />
              <span className="text-blue-800">Rate & Review Product</span>
            </div>
          </Grid>
        </Grid>
            )
        })}
      </Grid>
    </div>
  );
}

export default OrderDetails;
