'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ToastCtx = createContext(() => {});
export const useToast = () => useContext(ToastCtx);

function Toast({ type = 'success', msg }) {
  const bg = type === 'success' ? 'bg-success-500' : 'bg-warning-500';
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50">
      <div
        role="status"
        aria-live="polite"
        className={`${bg} text-white px-4 py-2 rounded-xl shadow-lg`}
      >
        {msg}
      </div>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  return (
    <ToastCtx.Provider value={setToast}>
      {children}
      {toast && <Toast {...toast} />}
    </ToastCtx.Provider>
  );
}
