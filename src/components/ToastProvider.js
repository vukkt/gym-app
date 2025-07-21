'use client';

import { createContext, useContext } from 'react';
import { Toaster, toast as hotToast } from 'react-hot-toast';

/* ───── Context & hook identical to before ───── */
const ToastCtx = createContext(hotToast);
export const useToast = () => useContext(ToastCtx);

/* ───── Provider ───── */
export function ToastProvider({ children }) {
  return (
    <ToastCtx.Provider value={hotToast}>
      {children}
      {/* One <Toaster/> at app root handles all toasts */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: 'rounded-xl px-4 py-2 text-sm',
          success: { className: 'bg-success-500 text-white' },
          error: { className: 'bg-warning-500 text-white' },
        }}
      />
    </ToastCtx.Provider>
  );
}
