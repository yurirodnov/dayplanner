import React from "react";
import { Link } from "react-router-dom";
// import { ModalAuthorisation } from "../../modal-authorisation/ModalAuthorisation";
import { UserEnter } from "../../user-enter";
import { isUserAuthorised } from "../../../app/store/isAuthState";
import target from "../../../assets/icons/target.svg"
import * as styles from "./header.module.css";

export const Header = () => {
  const isAuthorised = isUserAuthorised.get();

  return (
    <div className={styles.header}>
      <Link to={"/"}><div className={styles.logo}>Dayplanner<img src={target} style={{ width: "40px" }} /></div></Link>

      <nav className={styles.navigation}>
        <ul>
          <Link to={"/plan"}><li>Планирование</li></Link>
          <Link to={"/useful"}><li>Полезное</li></Link>
          {isAuthorised ? <Link to={"/stats"}><li>Статистика</li></Link> : null}
        </ul>
      </nav>

      <UserEnter />

      {/* <div className="user-authorisation">
        <button>Войти</button>
      </div> */}
    </div >
  )
}



