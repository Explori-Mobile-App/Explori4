import { Toaster } from './ui/sonner';
import { Capacitor } from '@capacitor/core';

export function ToastProvider() {
  const isNative = Capacitor.isNativePlatform();
  
  return (
    <Toaster 
      position="top-center"
      offset={isNative ? 60 : 16} // Account for native status bar
      toastOptions={{
        style: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#1f2937',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        },
        className: 'my-toast',
      }}
    />
  );
}