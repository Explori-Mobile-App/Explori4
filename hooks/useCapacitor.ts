import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Preferences } from '@capacitor/preferences';

export const useCapacitor = () => {
  const [isNative, setIsNative] = useState(false);
  const [platform, setPlatform] = useState<string>('web');

  useEffect(() => {
    const initializeCapacitor = async () => {
      const native = Capacitor.isNativePlatform();
      const currentPlatform = Capacitor.getPlatform();
      
      setIsNative(native);
      setPlatform(currentPlatform);

      if (native) {
        // Configure Status Bar
        try {
          await StatusBar.setStyle({ style: Style.Light });
          await StatusBar.setBackgroundColor({ color: '#6366f1' });
        } catch (error) {
          console.log('StatusBar not available:', error);
        }

        // Hide Splash Screen
        try {
          await SplashScreen.hide();
        } catch (error) {
          console.log('SplashScreen not available:', error);
        }

        // Setup App state listener
        App.addListener('appStateChange', ({ isActive }) => {
          console.log('App state changed. Is active?', isActive);
        });

        App.addListener('appUrlOpen', (url) => {
          console.log('App opened with URL:', url);
        });
      }
    };

    initializeCapacitor();

    return () => {
      if (isNative) {
        App.removeAllListeners();
      }
    };
  }, []);

  // Utility functions
  const triggerHaptic = async (type: 'light' | 'medium' | 'heavy' = 'light') => {
    if (!isNative) return;
    
    try {
      const style = type === 'light' ? ImpactStyle.Light : 
                   type === 'medium' ? ImpactStyle.Medium : ImpactStyle.Heavy;
      await Haptics.impact({ style });
    } catch (error) {
      console.log('Haptics not available:', error);
    }
  };

  const setPreference = async (key: string, value: string) => {
    try {
      await Preferences.set({ key, value });
    } catch (error) {
      console.log('Preferences not available:', error);
      localStorage.setItem(key, value);
    }
  };

  const getPreference = async (key: string): Promise<string | null> => {
    try {
      const { value } = await Preferences.get({ key });
      return value;
    } catch (error) {
      console.log('Preferences not available:', error);
      return localStorage.getItem(key);
    }
  };

  const removePreference = async (key: string) => {
    try {
      await Preferences.remove({ key });
    } catch (error) {
      console.log('Preferences not available:', error);
      localStorage.removeItem(key);
    }
  };

  return {
    isNative,
    platform,
    triggerHaptic,
    setPreference,
    getPreference,
    removePreference
  };
};

export default useCapacitor;