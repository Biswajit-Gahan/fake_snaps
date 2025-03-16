import styles from "./status-media-image-styles.module.css";
import {useDeviceContext} from "../../../../context/device-context.jsx";

export default function StatusMedia() {
    const {
        state: { image },
    } = useDeviceContext();

    return <div className={styles.statusMedia_mainContainer}>
        <img className={styles.statusMedia_image} src={image} alt="status"/>
    </div>
}