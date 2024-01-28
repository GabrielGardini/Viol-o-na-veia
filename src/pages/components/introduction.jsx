import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Grid
        container
        gap={2}
        sx={{
          // mt: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: matches ? "center" : "",
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
            Quer aprender a tocar{" "}
            <span style={{ color: "#F2BF72" }}>violão</span>?
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Aqui no Violão na Veia vamos te dar uma aula sobre o violão e
            mostrar os passos para que você toque sua primeira música.
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
            class="ghost-animation"
            src="/guitar.svg"
            alt="guitar"
            width={matches ? 206 : 411}
            height={matches ? 165 : 330}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
};

export default Introduction;
