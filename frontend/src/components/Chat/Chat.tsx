import { useState } from "react";
import { ArrowUp02Icon } from "hugeicons-react";

import { useAddMessage } from "../../api/chat";
import { useChatStore } from "../../store/chatStore";
import style from "./chat.module.css";

export const Chat = () => {
  const [input, setInput] = useState<string>("");
  const { mutate: addMessage } = useAddMessage();
  const { chat, setChat } = useChatStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const role = "user";
    const content = input;
    setChat([...chat, { role, content }]);
    setInput("");

    if (chatId) {
      addMessage({ chatId, role, content });
    }
  };

  return (
    <section className={style.chat}>
      {chat.map((message, index) => (
        <div className={style.userBubble} key={index}>
          <p>{message.content}</p>
        </div>
      ))}

      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          className={style.input}
          id="propmt"
          type="text"
          placeholder=""
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <label className={style.label} htmlFor="propmt">
          Message Reachat
        </label>
        <button className={style.submitButton} type="submit">
          <ArrowUp02Icon />
        </button>
      </form>
    </section>
  );
};
