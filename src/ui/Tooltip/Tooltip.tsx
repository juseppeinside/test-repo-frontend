import { createSignal } from "solid-js";
import styles from "./Tooltip.module.scss";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = createSignal(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      class={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
      {isVisible() && <div class={styles.tooltip}>{props.text}</div>}
    </div>
  );
};

export default Tooltip;
