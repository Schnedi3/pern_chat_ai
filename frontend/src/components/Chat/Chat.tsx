import { ArrowUp02Icon } from "hugeicons-react";

import style from "./chat.module.css";

export const Chat = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={style.chat}>
      <div className={style.userBubble}>
        <p>This is a test of how will user bubble will look</p>
      </div>

      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <input className={style.input} id="propmt" type="text" placeholder="" />
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
