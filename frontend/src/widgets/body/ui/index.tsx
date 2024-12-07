import React from "react";
import { Routing } from "../../../app/providers/router";
import * as styles from "./body.module.css"



export const Body = () => {
  return (
    <div className={styles.wrapper}>
      <Routing />
    </div>

  )
}


