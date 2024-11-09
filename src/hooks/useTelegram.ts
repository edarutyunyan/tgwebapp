// import { TelegramWebApps } from "telegram-webapps-types";
// ReturnType { tg: TelegramWebApps.WebApp, toggleButton: () => void, user: TelegramWebApps.WebAppUser }

const { WebApp } = window.Telegram;
export const useTelegram = () => {

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
  }
}