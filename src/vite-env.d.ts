/// <reference types="vite/client" />

interface Window {
  voiceflow?: {
    chat: {
      load: (config: any) => void;
      open: () => void;
    };
  };
}