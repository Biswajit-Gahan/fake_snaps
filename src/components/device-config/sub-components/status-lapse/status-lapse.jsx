import styles from "./status-lapse-styles.module.css";
import {HiStatusOnline} from "react-icons/hi";
import useStatusLapse from "./controller/use-status-lapse.jsx";

export default function StatusLapse() {
    const {
        statusLapse,
        handlerStatusLapseInput
    } = useStatusLapse();

    return <div className={styles.statusLapse_mainContainer}>
        <div className={styles.statusLapse_container}>
            <HiStatusOnline />
            Status Lapse
        </div>
        <div className={styles.statusLapse_inputContainer}>
            <input className={styles.statusLapse_input} type="number" id={"status-count"} placeholder={"0"} min={0} max={100} value={statusLapse} onChange={handlerStatusLapseInput} />
        </div>
    </div>
}