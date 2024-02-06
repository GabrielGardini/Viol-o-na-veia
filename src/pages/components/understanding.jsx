import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const Understanding = () => {
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
          <Box
            sx={{
              borderBottom: 10,
              borderBottomColor: "white",

              height: matches ? 110 : 140,
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
              O Braço
            </h1>
          </Box>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#ffffff",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            O braço do violão é onde ficam as casas. As casas são esses
            retângulos entre as divisões brancas que temos na imagem acima. Um
            violão costuma ter uma média de 19 casas e elas servem pra dividir o
            braço fazendo com que cada lugar tenha um som diferente, mais grave
            para a esquerda e mais agudo para a direita.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#ffffff",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Quando vamos fazer um acorde no violão, precisamos apertar as cordas
            certas nas casas certas para termos o som que desejamos.
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
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              borderBottom: 10,
              borderBottomColor: "white",
              // bgcolor: "red",
              height: matches ? 110 : 140,
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
              As Cordas
            </h1>
          </Box>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#ffffff",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Como dito anteriormente, os violões costumam ter 6 cordas, cada uma
            com uma espessura e afinação, o que altera o som que ela produz.
            Cada corda tem um nome, como pode ser visto na imagem acima, sendo a
            corda de baixo na imagem conhecida como Mizona e a que está acima a
            Mizinha. O som de cada corda vai ficando mais agudo conforme
            avançamos da Mizona para a Mizinha.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#ffffff",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Para fazermos um acorde tocamos duas ou mais cordas juntas.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Understanding;
