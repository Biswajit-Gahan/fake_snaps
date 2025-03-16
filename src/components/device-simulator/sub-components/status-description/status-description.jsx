import styles from "./status-description-styles.module.css";
import {useDeviceContext} from "../../../../context/device-context.jsx";
import { IoEyeSharp } from "react-icons/io5";

function ArrowUpIcon() {
    return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 14.25L11.5 8L21 14.25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}


export default function StatusDescription() {
    const {
        state: {
            totalViews,
            statusMessage,
        }
    } = useDeviceContext();

    return <div className={styles.statusDescription_mainContainer}>
        <p className={styles.statusDescription_text}>{statusMessage}</p>
        <div className={styles.statusDescription_hr}/>
        <div className={styles.statusDescription_arrowUpIconContainer}>
            <ArrowUpIcon />
        </div>
        <div className={styles.statusDescription_statusCountContainer}>
            <IoEyeSharp size={20} />
            <p className={styles.statusDescription_countText}>{totalViews}</p>
        </div>
        <div className={styles.statusDescription_bar} />
    </div>
}