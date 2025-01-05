import React, { FC } from "react";
// import { openAddTaskModalHandler } from "../../../features/add-task/model";
import { isUserAuthorised } from "../../../app/store";
import sleep from "../../../assets/icons/sleep.svg"
import * as styles from "./styles.module.css";



export const PagePlan: FC = () => {
  const isAuthorised = isUserAuthorised.get();

  if (isAuthorised) {
    return (
      <>
        <div className={styles["planning-block"]}>

          <div className={styles["no-task-block"]}>
            <div><h1>Пока ни одной задачи на день...</h1></div>

            <img className="sleep-svg" src={sleep} style={{ width: "90px" }} />
          </div>

          <div className="tasks-block">

          </div>
          {/* <button className={styles["button-add-task"]} onClick={openAddTaskModalHandler}>Добавить задачу</button> */}
        </div>
      </>
    )

  } else {
    return (
      <div className="planning-block">
        <div className="not-authorised-block">
          <p>Войдите или зарегистрируйтесь, чтобы управлять задачами</p>
        </div>
      </div>
    )
  }
}

