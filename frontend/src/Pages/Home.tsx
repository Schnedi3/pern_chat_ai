import { useChatStore } from "../store/chatStore";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Nav } from "../components/Nav/Nav";
import { Welcome } from "../components/Welcome/Welcome";
import { Chat } from "../components/Chat/Chat";
import { Form } from "../components/Form/Form";
import style from "./home.module.css";

export const Home = () => {
  const { chatId, viewSidebar, setViewSidebar } = useChatStore();

  return (
    <main className={`${style.home} ${viewSidebar ? style.homeSmall : ""}`}>
      <Sidebar />
      <Nav />
      {chatId ? (
        <>
          <Chat />
          <Form />
        </>
      ) : (
        <Welcome />
      )}

      <span
        className={`${style.backdrop} ${
          viewSidebar ? style.backdropVisible : ""
        }`}
        onClick={() => setViewSidebar()}
      ></span>
    </main>
  );
};
