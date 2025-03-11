import styles from "./status-count-styles.module.css";
import {TbBrandDaysCounter} from "react-icons/tb";
import useStatusCount from "./controller/use-status-count.jsx";

export default function StatusCount() {
    const {
        statusCount,
        handlerStatusCountInput
    } = useStatusCount();

    return <div className={styles.statusCount_mainContainer}>
        <div className={styles.statusCount_container}>
            <TbBrandDaysCounter />
            Status Count
        </div>
        <div className={styles.statusCount_inputContainer}>
            <input className={styles.statusCount_input} type="number" id={"status-count"} placeholder={"0"} min={0} max={4} value={statusCount} onChange={handlerStatusCountInput}/>
        </div>
    </div>
}