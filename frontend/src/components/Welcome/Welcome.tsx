import { useCreateChat } from "../../api/chat";
import style from "./welcome.module.css";

export const Welcome = () => {
  const { mutate: createChat } = useCreateChat();

  return (
    <section className={style.welcome}>
      <h2>
        <span>What</span>
        <span>can</span>
        <span>I</span>
        <span>help</span>
        <span>you</span>
        <span>with?</span>
      </h2>

      <button className={style.startButton} onClick={() => createChat()}>
        Start chat
      </button>
    </section>
  );
};
