import React from "react";
import { Link } from 'react-router-dom';
import sleep from "../../assets/icons/sleep.svg"
import "./pageplan.css";



export const PagePlan = () => {
  return (
    <div className="planning-block">
      <div className="no-task-block">
        <div><h1>Пока ни одной задачи на день...</h1></div>

        <img className="sleep-svg" src={sleep} style={{ width: "90px" }} />
      </div>

      <button>Добавить задачу</button>
    </div>


  )
}

