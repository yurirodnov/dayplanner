import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../widgets/header";
import { Body } from "../widgets/body/Body";
import "./styles/index.css"



export const App = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </>
  )
}