import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const Chords = () => {
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
              color: "#F2BF72",
              fontWeight: "Bold",
              fontSize: matches ? "50px" : "81px",
            }}
          >
            Os Acordes
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Os acordes são a junção de duas ou mais notas musicais produzidas
            quando tocamos as cordas do violão. Se você é destro, irá segurar o
            braço do violão com a mão esquerda e é com ela que fará os acordes.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            A maioria dos acordes é a junção de 3 notas musicais e vc vai fazer
            cada uma delas apertando com os dedos da sua mão esquerda em cima de
            cada corda e casa corretas.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            No esquema ao lado vemos a demonstração do Acorde Lá (A). As
            bolinhas são os locais onde precisamos apertar cada corda. Os
            números nas bolinhas indicam qual deve ser apertada primeiro, sendo
            o número 1 apertado com o dedo indicador, o 2 o dedo de meio a assim
            vai até o dedo mindinho.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Pelo esquema podemos ver que as cordas devem ser apertadas na
            segunda casa, além disso vemos que há um X na corda mizona, o que
            significa que ela não deve ser tocada.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Além disso, é importante saber que se não há nenhuma indicação do
            número da casa que estamos, é porque a primeira casa que aparece é
            realmente a 1ª casa, como é o caso.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Por último, existe a pestana, que é quando você usa o dedo indicador
            para fazer uma barra e apertar várias cordas ao mesmo tempo. Por
            exemplo no acordes B, Bm, F e Gm
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
            src="/acordes.svg"
            alt="guitar"
            width={matches ? 305 : 464}
            height={matches ? 246 : 478}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
};

export default Chords;
