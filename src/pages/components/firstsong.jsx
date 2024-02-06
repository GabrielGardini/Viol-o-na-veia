import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const FirstSong = () => {
  const matches = useMediaQuery("(max-width:900px)");

  const goToSong = () => {
    window.open("https://www.youtube.com/watch?v=N4bFqW_eu2I", "_blank");
  };

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
            Toque sua primeira
            <span style={{ color: "#F2BF72" }}> Música</span>!
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            House of the Rising Sun, da banda The Animals é um clássico de 1964
            e foi a música que me fez querer aprender a tocar violão. Aprenda a
            tocar essa música com apenas 5 acordes!
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Tente tocar cada acorde lentamente, apenas tocando cada corda uma
            vez. Cada acorde deve ser tocado no momento em que aparece em cima
            das palavras na letra.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#5A413D",
              fontSize: matches ? "27px" : "30px",
            }}
          >
            Se preferir, você pode pesquisar a cifra de qualquer outra música e
            tentar tocar. A prática leva à perfeição!
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
          <Image
            // class="ghost-animation"
            src="/firstsong.svg"
            alt="first song"
            width={matches ? 305 : 457}
            height={matches ? 246 : 367}
          ></Image>
          <Button
            sx={{
              mt: 4,
              mb: 4,
              bgcolor: "#5A413D",
              ":hover": { bgcolor: "#F2BF72" },
            }}
            onClick={() => goToSong()}
            variant="contained"
          >
            Escute Aqui!
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FirstSong;
