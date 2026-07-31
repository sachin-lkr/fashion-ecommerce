import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import React from "react";

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar className="!bg-[#9155fd] !text-white">S</Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Sachin</p>
              <p className="opacity-70">30/07/2026</p>
            </div>
          </div>
          <Rating value={3} readOnly/>
          <p className=" op">Lorem ipsum dolor sit amet consectetur, </p>

        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
