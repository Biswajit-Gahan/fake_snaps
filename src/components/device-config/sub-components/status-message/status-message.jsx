import styles from "./status-message-styles.module.css";
import useStatusMessage from "./controller/use-status-message.jsx";

export default function StatusMessage() {
    const {
        statusMessage,
        handlerStatusMessageInput
    } = useStatusMessage();

    return <div className={styles.statusMessage_mainContainer}>
        <textarea className={styles.statusMessage_message} placeholder={"Please enter status message"} value={statusMessage} onChange={handlerStatusMessageInput}/>
    </div>
}