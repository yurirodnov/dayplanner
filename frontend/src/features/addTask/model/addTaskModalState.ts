import React from 'react';
import { hookstate } from '@hookstate/core';

export const isAddTaskModalOpen = hookstate<boolean>(false);

// export const closeAddTaskModal = isAddTaskModalOpen.set(false);
// export const openAddTaskModal = isAddTaskModalOpen.set(true);


