// import { TelegramWebApps } from "telegram-webapps-types";
// ReturnType { tg: TelegramWebApps.WebApp, toggleButton: () => void, user: TelegramWebApps.WebAppUser }

import {TelegramWebApps} from "telegram-webapps-types";

const { WebApp } = window.Telegram;

type HookReturnType = {
  app: TelegramWebApps.WebApp,
  toggleButton: () => void,
  user: TelegramWebApps.WebAppUser,
  sendData: (data: unknown) => Promise<void>,
  onClose: () => void,
}
export const useTelegram = (): HookReturnType => {

  const onClose = () => WebApp.close();
  const toggleButton = () => WebApp.MainButton.isVisible ? WebApp.MainButton.hide() : WebApp.MainButton.show();

  const sendData = (data: unknown) => {
    WebApp.sendData(JSON.stringify({ dataFromWebApp: data }))
  };
  
  return {
    app: WebApp,
    toggleButton,
    user: WebApp.initDataUnsafe.user,
    sendData,
    onClose,
  } as HookReturnType;
}