import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../widgets/header";
import { Body } from "../widgets/body/ui";
import { AddTask } from "../features/add-task";
import { closeAddTaskModalHandlerEsc } from "../features/add-task";
import "./styles/index.css"



export const App = () => {

  window.addEventListener("keyup", () => closeAddTaskModalHandlerEsc)
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
        <AddTask />
      </BrowserRouter>
    </>
  )
}