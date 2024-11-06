export interface IMessage {
  chatId?: number;
  role: string;
  content: string;
}

export interface IChatStore {
  chat: IMessage[];
  setChat: (chat: IMessage[]) => void;
}
