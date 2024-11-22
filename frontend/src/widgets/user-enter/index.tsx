import React, { FC } from "react";
import { RegistrationButton } from "../../features/registration";
import { AuthButton } from "../../features/authorisation";
import { LogoutButton } from "../../features/logout";
import { isUserAuthorised } from "../../app/store";
import "./user-enter.css"


export const UserEnter: FC = () => {
  const isAuthorised = isUserAuthorised.get();
  if (isAuthorised) {
    return (<div className="user-enter-block">
      <LogoutButton />
    </div>)
  } else {
    return (
      <div className="user-enter-block">
        <RegistrationButton />
        <AuthButton />
      </div>)
  }

}