import React, { FC } from "react";
import { Routes, Route } from "react-router";
import { PageHome } from "../../../pages/page-home/ui";
import { PagePlan } from "../../../pages/page-plan/ui";
import { PageArticles } from "../../../pages/page-articles/ui";
import { PageStats } from "../../../pages/page-stats/ui";




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