import { Cancel01Icon, Delete02Icon } from "hugeicons-react";

import { useChatStore } from "../../store/chatStore";
import { useGetOldChats } from "../../api/chat";
import { IOldChat } from "../../types/types";
import style from "./sidebar.module.css";

export const Sidebar = () => {
  const { chat, viewSidebar, setViewSidebar } = useChatStore();
  const { data: oldChats } = useGetOldChats();

  console.log(oldChats)

  return (
    <section
      className={`${style.archive} ${viewSidebar ? style.visibleArchive : ""}`}
    >
      <button
        className={style.closeSidebarButton}
        onClick={() => setViewSidebar()}
      >
        <Cancel01Icon className={style.closeSidebarIcon} />
      </button>

      <ul className={style.chatList}>
        <h4 className={style.title}>Current chat</h4>
        {chat.length !== 0 && (
          <li className={style.conversation}>
            <p className={style.summary}>{chat[0].content}</p>
            <Delete02Icon className={style.deleteChatIcon} />
          </li>
        )}
      </ul>

      <ul className={style.chatList}>
        <h4 className={style.title}>Old chats</h4>
        {oldChats.map((oldChat: IOldChat) => (
          <li className={style.conversation} key={oldChat.id}>
            <p className={style.summary}>{oldChat.conversation[0].content}</p>
            <Delete02Icon className={style.deleteChatIcon} />
          </li>
        ))}
      </ul>
    </section>
  );
};
