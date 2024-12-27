import React from "react";
import { Routing } from "../../../app/providers/router";
import { closeAddTaskModalHandlerEsc } from "../../../features/add-task";
import * as styles from "./body.module.css"



export const Body = () => {
  return (
    <div className={styles.wrapper} onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => closeAddTaskModalHandlerEsc(e)}>
      <Routing />
    </div>

  )
}


