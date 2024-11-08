import {
  BubbleChatIcon,
  Menu03Icon,
  Moon02Icon,
  Sun02Icon,
} from "hugeicons-react";

import { useCreateChat } from "../../api/chat";
import { useChatStore } from "../../store/chatStore";
import { useTheme } from "../../hooks/useTheme";
import style from "./nav.module.css";

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  const { mutate: createChat } = useCreateChat();
  const { setChat, viewSidebar, setViewSidebar } = useChatStore();

  const handleClick = () => {
    createChat();
    setChat([]);
  };

  const toggleTheme = () => {
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };

  return (
    <section className={`${style.nav} ${viewSidebar ? style.navSmall : ""}`}>
      <h1 className={style.title}>reachat</h1>
      <div className={style.widgets}>
        <button onClick={handleClick}>
          <BubbleChatIcon />
        </button>

        <button onClick={toggleTheme}>
          {theme === "theme-light" ? <Moon02Icon /> : <Sun02Icon />}
        </button>

        <button onClick={() => setViewSidebar()}>
          <Menu03Icon />
        </button>
      </div>
    </section>
  );
};
