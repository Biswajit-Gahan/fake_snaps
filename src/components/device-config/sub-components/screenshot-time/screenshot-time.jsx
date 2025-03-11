import styles from "./screenshot-time-styles.module.css";
import {IoMdTime} from "react-icons/io";
import useScreenshotTime from "./controller/use-screenshot-time.jsx";

export default function ScreenshotTime() {
    const {
        screenshotHour,
        screenshotMinute,
        handlerHourInput,
        handlerMinuteInput
    } = useScreenshotTime();

    return <div className={styles.screenshotTime_mainContainer}>
        <div className={styles.screenshotTime_container}>
            <IoMdTime />
            Screenshot Time
        </div>
        <div className={styles.screenshotTime_inputContainer}>
            <input className={styles.screenshotTime_input} type="number" id={"status-count"} placeholder={"0"} min={1} max={12} value={screenshotHour} onChange={handlerHourInput}/>
            <input className={styles.screenshotTime_input} type="number" id={"status-count"} placeholder={"0"} min={0} max={59} value={screenshotMinute} onChange={handlerMinuteInput}/>
        </div>
    </div>
}