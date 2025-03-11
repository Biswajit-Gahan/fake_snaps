import styles from "./battery-styles.module.css"
import { AiOutlineThunderbolt } from "react-icons/ai";
import useBattery from "./controller/use-battery.jsx";

export default function Battery() {
    const {
        battery,
        handlerBatteryInput
    } = useBattery();

    return <div className={styles.battery_mainContainer}>
        <div className={styles.battery_container}>
            <AiOutlineThunderbolt />
            Battery
        </div>
        <div className={styles.battery_inputContainer}>
            <input className={styles.battery_input} type="number" id={"battery"} min={0} max={100} value={battery} onChange={handlerBatteryInput} />
        </div>
    </div>
}