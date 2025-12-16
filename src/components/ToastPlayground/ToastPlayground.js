import React, { useState } from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export default function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");

  function handleCreateNewToast(event) {
    event.preventDefault();
    createToast(variant, message);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form onSubmit={handleCreateNewToast} className={styles.controlsWrapper}>
        {/* MESSAGE FIELD */}
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>

          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
          </div>
        </div>

        {/* RADIO BUTTONS */}
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>

          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;

              return (
                <label htmlFor={id} key={option}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={({ target }) => setVariant(target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        {/* POP BUTTON */}
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
