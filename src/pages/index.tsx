import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/header";
import Introduction from "./components/introduction";
import GuitarTypes from "./components/guitartypes";
import TwoInstruments from "./components/twoinstrument";
import Understanding from "./components/understanding";
import Chords from "./components/chords";
import AllChords from "./components/allchords";
import FirstSong from "./components/firstsong";
import Footer from "./components/footer";
import { Box, useMediaQuery } from "@mui/material";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const matches = useMediaQuery("(min-width:1900px)");

  return (
    <>
      <Head>
        <title>Violão Na Veia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Domine&family=Heebo&family=Kalnia&family=Poppins:wght@400;600;700&display=swap');
        </style>
      </Head>
      <Box sx={{ bgcolor: "white", fontFamily: "Poppins" }}>
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: matches ? "70%" : "90%",
              mt: matches ? 20 : 14,
            }}
          >
            <Introduction />
          </Box>
          <Box
            sx={{
              width: "100vw",
              backgroundColor: "#5A413D",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"/vamoscomecar.svg"}
              width={"80%"}
              // height={"100vh"}
              alt={"vamos começar"}
            />
          </Box>
          <Box
            sx={{
              width: matches ? "70%" : "90%",
              mt: matches ? 20 : 14,
            }}
          >
            <GuitarTypes />
          </Box>
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 10,
              backgroundColor: "#5A413D",
            }}
          >
            <Box
              sx={{
                width: matches ? "70%" : "90%",

                backgroundColor: "#5A413D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TwoInstruments />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100vw",
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: matches ? "" : "center",
            }}
          >
            <h1
              style={{
                fontFamily: "Poppins",
                color: "#5A413D",
                fontWeight: "Bold",
                fontSize: matches ? "81px" : "50px",
              }}
            >
              Entendendo o<span style={{ color: "#F2BF72" }}> violão</span>
            </h1>
            <img
              src={"/entendendo.svg"}
              width={"80%"}
              // height={"100vh"}
              alt={"vamos começar"}
            />
          </Box>
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 10,
              backgroundColor: "#5A413D",
            }}
          >
            <Box
              id={"teoria"}
              sx={{
                width: matches ? "70%" : "90%",

                backgroundColor: "#5A413D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Understanding />
            </Box>
          </Box>
          <Box
            sx={{
              width: matches ? "70%" : "90%",
              mt: matches ? 20 : 14,
            }}
          >
            <Chords />
          </Box>
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 10,
              backgroundColor: "#5A413D",
            }}
          >
            <Box
              sx={{
                width: matches ? "80%" : "90%",

                backgroundColor: "#5A413D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box id={"acordes"} sx={{ textAlign: "center" }}>
                <h1
                  style={{
                    fontFamily: "Poppins",
                    color: "#F2BF72",
                    fontWeight: "Bold",
                    fontSize: matches ? "81px" : "50px",
                  }}
                >
                  Principais Acordes
                </h1>
                <h6
                  style={{
                    fontFamily: "Poppins",
                    color: "#F2BF72",
                    fontWeight: "Bold",
                    fontSize: matches ? "50px" : "61px",
                  }}
                >
                  Clique para ouvir os sons!
                </h6>
              </Box>
              <AllChords />
            </Box>
          </Box>
          <Box
            sx={{
              width: matches ? "70%" : "90%",
              mt: matches ? 20 : 14,
            }}
          >
            <FirstSong />
          </Box>
          <Footer></Footer>
        </Box>
      </Box>
    </>
  );
}
