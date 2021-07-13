import { createContext } from "react";
import { ToastContainer, toast as _toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = {
  position: "top-right",
  autoClose: 4000,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeOnClick: true,
  role: "alert",
};

export const ToastsContext = createContext(undefined);

export const ToastsProvider = ({ children }) => {
  const toast = (title, message, extraOpts) => {
    _toast(
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1em",
          }}>
          {title}
        </div>
        <div>{message}</div>
      </div>,
      { ...defaultOptions, ...extraOpts }
    );
  };

  const toastError = (title, message) => {
    toast(title, message, {
      ...defaultOptions,
      progressStyle: {
        background: "#dc3545",
      },
    });
  };
  const toastWarning = (title, message) => {
    toast(title, message, {
      ...defaultOptions,
      progressStyle: {
        background: "#ffc107",
      },
    });
  };
  const toastInfo = (title, message) => {
    toast(title, message, {
      ...defaultOptions,
      progressStyle: {
        background: "#0dcaf0",
      },
    });
  };
  const toastSuccess = (title, message) => {
    toast(title, message, {
      ...defaultOptions,
      progressStyle: {
        background: "#198754",
      },
    });
  };

  return (
    <>
      <ToastsContext.Provider
        value={{ toast, toastError, toastInfo, toastSuccess, toastWarning }}>
        {children}
      </ToastsContext.Provider>
      <ToastContainer style={{ top: "5em" }} role="alert" />
    </>
  );
};
