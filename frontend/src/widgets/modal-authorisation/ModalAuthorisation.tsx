import React, { FC } from "react";
import { useState } from "react";
import "./modalauthorisation.css";



const ModalAuthorisation: FC = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState<boolean>(false);
  console.log(isAuthModalOpen)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAuthModalOpen(true)
  };



  return (
    <>
      <div className="modal-wrapper">
        <div className="user-authorisation">
          <button onClick={handleClick}>Войти</button>
        </div>


        <div className="modal-auth-fade">
          <div className="modal-auth-window">



          </div>
        </div>
      </div>
    </>

  )

}


export { ModalAuthorisation };