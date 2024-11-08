import { useChatStore } from "../../store/chatStore";
import style from "./chat.module.css";

export const Chat = () => {
  const { chat } = useChatStore();

  return (
    <section className={style.chat}>
      {chat.map((message, index) => (
        <div
          className={
            message.role === "user" ? style.userBubble : style.aiBubble
          }
          key={index}
        >
          <p>{message.content}</p>
        </div>
      ))}
    </section>
  );
};
