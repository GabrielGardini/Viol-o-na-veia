import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const AllChords = () => {
  const matches = useMediaQuery("(max-width:900px)");

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
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
            src="/a.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
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
            // class="ghost-animation"
            src="/b.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
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
            // class="ghost-animation"
            src="/c.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
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
            // class="ghost-animation"
            src="/dm.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
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
            // class="ghost-animation"
            src="/em.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
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
            // class="ghost-animation"
            src="/g.svg"
            alt="guitar"
            width={matches ? "150px" : "169px"}
          ></img>
          <img
            style={{ cursor: "pointer", margin: matches ? 15 : 30 }}
            // class="ghost-animation"
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
