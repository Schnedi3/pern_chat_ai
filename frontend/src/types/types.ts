export interface IMessage {
  chatId?: number;
  role: string;
  content: string;
}

export interface IChatStore {
  chat: IMessage[];
  setChat: (chat: IMessage[]) => void;
  chatId: number;
  setChatId: (chatId: number) => void;
}

export interface IOldChat {
  id: number;
  conversation: IMessage[];
}
