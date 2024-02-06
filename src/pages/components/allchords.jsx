// "use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

import { Howl } from "howler";

// import A from "../../../public/a.mp3";
const AllChords = () => {
  const matches = useMediaQuery("(max-width:900px)");

  const playA = () => {
    const sound = new Howl({
      src: ["A.mp3"],
    });
    sound.play();
  };

  const playAm = () => {
    const sound = new Howl({
      src: ["Am.mp3"],
    });
    sound.play();
  };

  const playB = () => {
    const sound = new Howl({
      src: ["B.mp3"],
    });
    sound.play();
  };

  const playBm = () => {
    const sound = new Howl({
      src: ["Bm.mp3"],
    });
    sound.play();
  };

  const playC = () => {
    const sound = new Howl({
      src: ["C.mp3"],
    });
    sound.play();
  };

  const playD = () => {
    const sound = new Howl({
      src: ["D.mp3"],
    });
    sound.play();
  };
  const playDm = () => {
    const sound = new Howl({
      src: ["Dm.mp3"],
    });
    sound.play();
  };

  const playE = () => {
    const sound = new Howl({
      src: ["E.mp3"],
    });
    sound.play();
  };

  const playEm = () => {
    const sound = new Howl({
      src: ["Em.mp3"],
    });
    sound.play();
  };

  const playF = () => {
    const sound = new Howl({
      src: ["F.mp3"],
    });
    sound.play();
  };

  const playG = () => {
    const sound = new Howl({
      src: ["G.mp3"],
    });
    sound.play();
  };

  const playGm = () => {
    const sound = new Howl({
      src: ["Gm.mp3"],
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
            onClick={() => playB()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/b.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            onClick={() => playBm()}
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
            onClick={() => playC()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/c.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            onClick={() => playD()}
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
            onClick={() => playDm()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/dm.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            onClick={() => playE()}
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
            onClick={() => playEm()}
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            class="acorde"
            src="/em.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            onClick={() => playF()}
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
            onClick={() => playG()}
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
