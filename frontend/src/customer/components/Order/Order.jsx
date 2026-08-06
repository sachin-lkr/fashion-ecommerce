import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";
const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];
function Order() {
  return (
    <div className="lg:px-20 px-5 mt-5">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
        <Grid size={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold ">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultValue={Option.value}
                    className="cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600 cursor-pointer"
                    htmlFor={option.value}
                  >
                    {" "}
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

        </Grid>
        <Grid size={{xs:9}} >
           <div className="space-y-5">
             <OrderCard />
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>


           </div>

        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
