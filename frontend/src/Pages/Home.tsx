import { Nav } from "../components/Nav/Nav";
import { Chat } from "../components/Chat/Chat";
import { Welcome } from "../components/Welcome/Welcome";

export const Home = () => {
  return (
    <main>
      <Nav />
      {chatId ? <Chat /> : <Welcome />}
    </main>
  );
};
