import React from "react";
import { Link } from 'react-router-dom';
import { isUserAuthorised } from "../../app/store";
import sleep from "../../assets/icons/sleep.svg"
import "./pageplan.css";



export const PagePlan = () => {
  const isAuthorised = isUserAuthorised.get();

  console.log(isAuthorised)


  return (
    <div className="planning-block">
      <div className="not-authorised-block">
        <p>Войдите или зарегистрируйтесь, чтобы управлять задачами</p>
      </div>

      <div className="no-task-block">
        <div><h1>Пока ни одной задачи на день...</h1></div>

        <img className="sleep-svg" src={sleep} style={{ width: "90px" }} />
      </div>

      <div className="tasks-block"></div>

      <button>Добавить задачу</button>
    </div>


  )
}

