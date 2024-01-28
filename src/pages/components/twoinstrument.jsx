import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const TwoInstruments = () => {
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
              color: "#F2BF72",
              fontWeight: "Bold",
              fontSize: matches ? "50px" : "61px",
            }}
          >
            Então vou ter que
            <span style={{ color: "#ffffff" }}> aprender </span>a tocar dois
            instrumentos
            <span style={{ color: "#ffffff" }}> diferentes</span>?
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#ffffff",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Não! você pode tocar ambos da mesma forma usando as técnicas que vou
            te ensinar aqui! As dicas valem até mesmo para uma guitarra, já que
            sua configuração e número de cordas (6) é igual as do violão!
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
            class="face"
            src="/thinkingemoji.svg"
            alt="Thinking Emoji"
            width={matches ? 206 : 411}
            height={matches ? 165 : 330}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
};

export default TwoInstruments;
