import { useState } from "react";
import { ArrowUp02Icon } from "hugeicons-react";

import { useAddMessage } from "../../api/chat";
import style from "./chat.module.css";

export const Chat = () => {
  const [input, setInput] = useState<string>("");
  const { mutate: addMessage } = useAddMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const role = "user";
    const content = input;

    if (chatId) {
      addMessage({ chatId, role, content });
    }
  };

  return (
    <section className={style.chat}>
      <div className={style.userBubble}>
        <p>This is a test of how user bubble looks</p>
      </div>

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
