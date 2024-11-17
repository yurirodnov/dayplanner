import React from 'react';
import { hookstate } from '@hookstate/core';


export const isUserAuthorised = hookstate<boolean>(true);


export const setUserAuthorised = () => isUserAuthorised.set(true);
export const setUserNotAuthorised = () => isUserAuthorised.set(false);