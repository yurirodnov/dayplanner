import React, { FC } from "react";
import { RegistrationButton } from "../../features/registration";
import { AuthButton } from "../../features/authorisation";
import { LogoutButton } from "../../features/logout";
import { isUserAuthorised } from "../../app/store";
import * as styles from "./userEnter.module.css"


export const UserEnter: FC = () => {
  const isAuthorised = isUserAuthorised.get();
  if (isAuthorised) {
    return (<div className={styles.userEnterBlock}>
      <LogoutButton />
    </div>)
  } else {
    return (
      <div className={styles.userEnterBlock}>
        <RegistrationButton />
        <AuthButton />
      </div>)
  }

}