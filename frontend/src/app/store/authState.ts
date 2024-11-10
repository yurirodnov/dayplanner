import React from 'react';
import { hookstate } from '@hookstate/core';


export const isUserAuthorised = hookstate<boolean>(false);


export const setUserAuthorised = () => isUserAuthorised.set(true);
export const setUserNotAuthorised = () => isUserAuthorised.set(false);