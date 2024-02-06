import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const Footer = () => {
  const matches = useMediaQuery("(min-width:1900px)");

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#5A413D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Poppins",
          color: "#F2BF72",
          fontWeight: "Bold",
          fontSize: matches ? "51px" : "30px",
        }}
      >
        {" "}
        Gabriel Gardini - 2024
      </h1>
    </Box>
  );
};

export default Footer;
