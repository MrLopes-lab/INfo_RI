import React, { createContext } from 'react';

import { v4 } from 'uuid';

export interface ToastRegisterMessage {
  id: string;
  operator_id: string;
  content: string;
}

interface ToastRegisterContextData {
  addToast(message: Omit<ToastRegisterMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastRegisterContext = createContext<ToastRegisterContextData>(
  {} as ToastRegisterContextData,
);
