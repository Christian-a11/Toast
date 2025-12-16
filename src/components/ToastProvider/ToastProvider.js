import React from "react";
export const ToastContext = React.createContext();
import { useEscapeKey } from "../../hooks/use-escape-key.js";
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    setToasts((prevToast) => [...prevToast, newToast]);
  }
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
