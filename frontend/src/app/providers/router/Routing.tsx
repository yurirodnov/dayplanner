import React, { FC } from "react";
import { Routes, Route } from "react-router";
import { PageHome } from "../../../pages/page-home";
import { PagePlan } from "../../../pages/page-plan";
import { PageArticles } from "../../../pages/page-articles";
import { PageStats } from "../../../pages/page-stats";




export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/plan" element={<PagePlan />} />
      <Route path="/useful" element={<PageArticles />} />
      <Route path="/stats" element={<PageStats />} />
    </Routes>
  )
}