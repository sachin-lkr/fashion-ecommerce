import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

function DeliveryAddressFrom() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full">
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, lg: 5 }}
          className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
          </div>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box className=" rounded-md shadow-md p-5">
            <form onSubmit={handelSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="Frist Name"
                    fullWidth
                    required
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    required
                    autoComplete="given-name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 12 }}>
                  <TextField
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    required
                    autoComplete="given-name"
                    multiline
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    required
                    autoComplete="given-name"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    required
                    autoComplete="given-name"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="zip"
                    name="zip"
                    label="Zip / Pin Code"
                    fullWidth
                    required
                    autoComplete="given-name"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="PhoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    fullWidth
                    required
                    autoComplete="given-name"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <button
                type="submit"
                className=" mt-2 rounded-sm text-white font-semibold px-1.5 py-2 cursor-pointer bg-[#9155fd] hover:bg-[#7e3af2] transition-colors duration-300"
              >
                DELIVERD HERE
              </button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressFrom;
