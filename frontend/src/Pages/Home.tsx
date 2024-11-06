import { useState } from "react";

import { useCreateChat } from "../api/chat";
import { Nav } from "../components/Nav/Nav";
import { Chat } from "../components/Chat/Chat";
import { Welcome } from "../components/Welcome/Welcome";

export const Home = () => {
  const [chatId, setChatId] = useState<number | null>(null);
  const { data } = useCreateChat();

  if (data) {
    setChatId(data.data.id);
  }

  return (
    <main>
      <Nav />
      {chatId ? <Chat /> : <Welcome />}
    </main>
  );
};
