import React, { FC } from "react";
import { TaskList } from "../../../features/task-list";
import { isUserAuthorised } from "../../../app/store";
import sleep from "../../../assets/icons/sleep.svg"
import * as styles from "./styles.module.css";



export const PagePlan: FC = () => {
  const isAuthorised = isUserAuthorised.get();

  if (isAuthorised) {
    return (
      <>
        <div className={styles.planningBlock}>

          <TaskList />
          {/* <div className={styles["no-task-block"]}>
            <div><h1>Пока ни одной задачи на день...</h1></div>

            <img className="sleep-svg" src={sleep} style={{ width: "90px" }} />
          </div> */}



        </div>
      </>
    )

  } else {
    return (
      <div className={styles.planningBlock}>
        <div className="not-authorised-block">
          <p>Войдите или зарегистрируйтесь, чтобы управлять задачами</p>
        </div>
      </div>
    )
  }
}

