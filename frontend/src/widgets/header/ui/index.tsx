import React from "react";
import { Link } from "react-router-dom";
import { ModalAuthorisation } from "../../modal-authorisation/ModalAuthorisation";
import { UserEnter } from "../../user-enter";
import target from "../../../assets/icons/target.svg"
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}><div className="logo">Dayplanner<img src={target} style={{ width: "40px" }} /></div></Link>

      <nav>
        <ul>
          <Link to={"/plan"}><li>Планирование</li></Link>
          <Link to={"/useful"}><li>Полезное</li></Link>
        </ul>
      </nav>

      <UserEnter />

      {/* <div className="user-authorisation">
        <button>Войти</button>
      </div> */}
    </div>
  )
}



