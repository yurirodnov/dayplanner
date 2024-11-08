import React, { FC } from "react";
import { RegistrationButton } from "../../features/registration";
import { AuthButton } from "../../features/auth";


export const UserEnter = () => {
  return (
    <div className="user-enter-block">
      <RegistrationButton />
      <AuthButton />
    </div>)
}