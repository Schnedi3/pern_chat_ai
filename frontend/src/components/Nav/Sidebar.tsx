import { Cancel01Icon, Delete02Icon } from "hugeicons-react";

import { useChatStore } from "../../store/chatStore";
import style from "./sidebar.module.css";

interface IArchiveProp {
  viewSidebar: boolean;
  setViewSidebar: (viewSidebar: boolean) => void;
}

export const Sidebar = ({ viewSidebar, setViewSidebar }: IArchiveProp) => {
  const { chat } = useChatStore();
  // todo: replace with old chats
  const oldConversations = Array.from({ length: 4 });

  return (
    <section
      className={`${style.archive} ${viewSidebar ? style.visibleArchive : ""}`}
    >
      <button
        className={style.closeSidebarButton}
        onClick={() => setViewSidebar(false)}
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
        {oldConversations.map((_, index) => (
          <li className={style.conversation} key={index}>
            <p className={style.summary}>
              This is a test of the previous chats length
            </p>
            <Delete02Icon className={style.deleteChatIcon} />
          </li>
        ))}
      </ul>
    </section>
  );
};
