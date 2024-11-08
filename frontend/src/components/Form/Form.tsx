import { ArrowUp02Icon } from "hugeicons-react";

import { useAddMessage, useCallAi } from "../../api/chat";
import { useChatStore } from "../../store/chatStore";
import style from "./form.module.css";

export const Form = () => {
  const { mutate: addMessage } = useAddMessage();
  const { chat, setChat } = useChatStore();
  const { mutate: callAi } = useCallAi();
  const { chatId, viewSidebar, input, setInput } = useChatStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const role = "user";
    const content = input;
    setChat([...chat, { role, content }]);
    setInput("");

    if (chatId) {
      addMessage({ chatId, role, content });
    }

    callAi(content, {
      onSuccess: ({ data }) => {
        setChat([
          ...chat,
          { role, content },
          { role: data.role, content: data.content },
        ]);
        addMessage({ chatId, role: data.role, content: data.content });
      },
    });
  };

  return (
    <section
      className={`${style.formContainer} ${
        viewSidebar ? style.formContainerSmall : ""
      }`}
    >
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
