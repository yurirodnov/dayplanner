import React from "react";
import { Routes, Route } from "react-router";
import { PageHome } from "../../../pages/page-home";
import { PagePlan } from "../../../pages/page-plan";
import { PageArticles } from "../../../pages/page-articles";



export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/plan" element={<PagePlan />} />
      <Route path="/useful" element={<PageArticles />} />
    </Routes>
  )
}