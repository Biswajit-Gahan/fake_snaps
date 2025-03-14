import styles from "./published-before-styles.module.css";
import {IoMdTime} from "react-icons/io";
import usePublishedBefore from "./controller/use-published-before.jsx";

export default function PublishedBefore() {
    const {
        publishedBeforeTime,
        publishedBeforeTimeFormat,
        handlerTimeInput,
        handlerTimeFormat
    } = usePublishedBefore();

    return <div className={styles.publishedBefore_mainContainer}>
        <div className={styles.publishedBefore_container}>
            <IoMdTime />
            Published Before
        </div>
        <div className={styles.publishedBefore_inputContainer}>
            <input className={styles.publishedBefore_input} type="number" id={"status-count"} placeholder={"0"} min={1} max={60} value={publishedBeforeTime} onChange={handlerTimeInput}/>
            <select className={styles.publishedBefore_select} value={publishedBeforeTimeFormat} onChange={handlerTimeFormat}>
                <option value={"s"}>Sec</option>
                <option value={"m"}>Min</option>
                <option value={"h"}>Hr</option>
            </select>
        </div>
    </div>
}