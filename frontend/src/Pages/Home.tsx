import { Nav } from "../components/Nav/Nav";
import { Chat } from "../components/Chat/Chat";
import { Welcome } from "../components/Welcome/Welcome";
import { useChatStore } from "../store/chatStore";

export const Home = () => {
  const { chatId } = useChatStore();

  return (
    <main>
      <Nav />
      {chatId ? <Chat /> : <Welcome />}
    </main>
  );
};
