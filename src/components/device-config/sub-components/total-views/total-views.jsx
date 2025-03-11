import styles from "./total-views-styles.module.css";
import {IoEye} from "react-icons/io5";
import useTotalViews from "./controller/use-total-views.jsx";

export default function TotalViews() {
    const {
        totalViews,
        handleTotalViewsInput,
    } = useTotalViews();

    return <div className={styles.totalViews_mainContainer}>
        <div className={styles.totalViews_container}>
            <IoEye />
            Total Views
        </div>
        <div className={styles.totalViews_inputContainer}>
            <input className={styles.totalViews_input} type="number" id={"status-count"} placeholder={"0"} min={0} value={totalViews} onChange={handleTotalViewsInput}/>
        </div>
    </div>
}