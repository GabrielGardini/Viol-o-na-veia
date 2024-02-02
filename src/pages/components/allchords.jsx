// "use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

import { Howl } from "howler";

// import A from "../../../public/a.mp3";
const AllChords = () => {
  const matches = useMediaQuery("(max-width:900px)");

  const playA = () => {
    // const sound = new Howl({
    //   src: ["a.mp3", "D.mp3"],
    //   volume: 0.2,
    // });
    // sound.play();

    const sound1 = new Howl({
      src: ["a.mp3"],
      volume: 0.2,
      rate: 2,
    });

    const sound2 = new Howl({
      src: ["D.mp3"],
      volume: 0.2,
      rate: 1.5,
    });

    sound1.play();

    sound1.on("end", () => {
      sound2.play();
    });
  };

  const playAm = () => {
    const sound = new Howl({
      src: ["Am.mp3"],
      volume: 0.2,
    });
    sound.play();
  };

  const playB = () => {
    const sound = new Howl({
      src: ["B.mp3"],
      volume: 0.2,
    });
    sound.play();
  };

  return (
    <>
      <Grid
        container
        gap={2}
        sx={{
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
            justifyContent: matches ? "center" : "right",
            alignItems: "center",
          }}
        >
          <img
            onClick={() => playA()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/a.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            onClick={() => playAm()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/am.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: matches ? "center" : "left",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/b.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/bm.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        gap={2}
        sx={{
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
            justifyContent: matches ? "center" : "right",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/c.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/d.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: matches ? "center" : "left",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/dm.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/e.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        gap={2}
        sx={{
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
            justifyContent: matches ? "center" : "right",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/em.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/f.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: matches ? "center" : "left",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/g.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            onClick={() => playGm()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/gm.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
        </Grid>
      </Grid>
    </>
  );
};

export default AllChords;
