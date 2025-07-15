import { createContext, useContext } from 'react';
import { toast } from 'react-hot-toast'; // already in ToastProvider

/** Very thin wrapper so we can tree-shake later if needed */
const ToastCtx = createContext(toast); // default = react-hot-toast

export function useToast() {
  return useContext(ToastCtx);
}

/* Re-export the plain functions for quick use */
useToast.success = toast.success;
useToast.error = toast.error;
useToast.loading = toast.loading;
