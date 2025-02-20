import { createSignal } from "solid-js";
import styles from "./Switch.module.scss";

function Switch() {
  const [isChecked, setIsChecked] = createSignal(false);

  const toggleSwitch = () => setIsChecked(!isChecked());

  return (
    <div
      class={`${styles.switch} ${
        isChecked() ? styles.checked : styles.unchecked
      }`}
      onClick={toggleSwitch}
    >
      <span
        class={`w-10 h-6 flex items-center justify-${
          isChecked() ? "end" : "start"
        } p-1 rounded-full transition-colors duration-300`}
      >
        <span class={`${styles.thumb} ${isChecked() ? styles.checked : ""}`} />
      </span>
    </div>
  );
}

export default Switch;
