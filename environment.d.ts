declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_TOKEN: "5938478522:AAFOB-WjyukvFisz90vHoWoowHMF38vUDAM";
      NODE_ENV?: "development" | "production";
      PORT?: number;
    }
  }
}

export {};
