import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const GuitarTypes = () => {
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Grid
        container
        gap={2}
        sx={{
          mt: -10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: matches ? "center" : "",
          }}
        >
          <h1
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontWeight: "Bold",
              fontSize: matches ? "50px" : "81px",
            }}
          >
            Quais os principais tipos de
            <span style={{ color: "#F2BF72" }}> violão</span>?
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Existem dois tipos de violão, os de corda de nylon e os de corda de
            aço. A principal diferença dos dois está nas cordas e no som que
            cada uma delas produz, sendo a corda de nylon um pouco mais suave do
            que a de aço.
          </p>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            // class="ghost-animation"
            src="/guitartypes.svg"
            alt="guitar"
            width={matches ? 305 : 457}
            height={matches ? 246 : 367}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
};

export default GuitarTypes;
