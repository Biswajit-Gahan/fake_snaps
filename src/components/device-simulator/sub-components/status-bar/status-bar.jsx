import styles from "./status-bar-styles.module.css";
import {useDeviceContext} from "../../../../context/device-context.jsx";

export default function StatusBar() {
    const {
        state: {
            statusCount,
            statusLapse,
        }
    } = useDeviceContext();

    return <div className={styles.statusBar_mainContainer}>
        <div className={styles.statusBar_mainWrapper}>
            <div className={styles.statusBar_bar}>
                <div className={styles.statusBar_status} style={{width: `${statusLapse}%`}}/>
            </div>
            {
                Array.from({length: statusCount}, (_, index) => <div key={index} className={styles.statusBar_bar}/>)
            }
        </div>
    </div>
}
