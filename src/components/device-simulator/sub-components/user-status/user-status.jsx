import styles from "./user-status-styles.module.css";
import defaultAvatar from "../../../../assets/default-avatar.png";
import {useDeviceContext} from "../../../../context/device-context.jsx";

function EllipsisIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
}

function ArrowLeftIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
}

export default function UserStatus() {
    const {
        state: {
            publishedBeforeTime,
            publishedBeforeTimeFormat,
        }
    } = useDeviceContext();
    return <div className={styles.userStatus_mainContainer}>
        <div className={styles.userStatus_infoContainer}>
            <div className={styles.userStatus_arrowIconContainer}>
                <ArrowLeftIcon />
            </div>
            <div className={styles.userStatus_userAvatarContainer}>
                <img className={styles.userStatus_userAvatar} src={defaultAvatar} alt="avatar"/>
            </div>
            <div className={styles.userStatus_timeContainer}>
                <p className={styles.userStatus_meText}>Me</p>
                <div className={styles.userStatus_dotSeparator}/>
                <p className={styles.userStatus_hourText}>{publishedBeforeTime}{publishedBeforeTimeFormat}</p>
            </div>
        </div>
        <div className={styles.userStatus_ellipsisIconContainer}>
            <EllipsisIcon />
        </div>
    </div>
}