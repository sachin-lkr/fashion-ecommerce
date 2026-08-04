import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

function OrderCard() {
  return (
    <div className="p-5 shadow-md hover:shadow-2xl ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top "
              src="https://media.gettyimages.com/id/157696797/photo/heap-of-folded-clothes.jpg?s=612x612&w=gi&k=20&c=7QmgLVTHlvkPG7ZLQuwhIDbqZ5jtHfa3pzjjMtXbjgg="
              alt="image"
            />
            <div className="ml-5 space-y-2">
              <p>titel Lorem, ipsum dolor.</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <div>
            <p className="font-semibold">₹499</p>
          </div>
        </Grid>
        <Grid size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustIcon className="w-4 h-4 text-green-600" />
                <span>Delivered On August 04</span>
              </p>
              <p  className="text-xs">Your item HAs been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivered On August 04</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
