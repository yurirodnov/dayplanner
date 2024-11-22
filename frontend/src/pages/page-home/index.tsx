import React from "react";
import { Link } from 'react-router-dom';
import check from "../../assets/icons/check.svg"
import "./pagehome.css";


export const PageHome = () => {
  return (
    <div className="welcome-block">

      <h1>Добро пожаловать в планировщик дня!</h1>

      <div className="welcome-block description">
        <div><p>Ставьте задачи</p><img src={check} style={{ width: "20px" }} /></div>
        <div><p>Отслеживайте результат</p><img src={check} style={{ width: "20px" }} /></div>
        <div><p>Достигайте целей</p><img src={check} style={{ width: "20px" }} /></div>
      </div>




    </div>
  )
}

