import styles from "./navbar-battery-styles.module.css";
import {useDeviceContext} from "../../../../context/device-context.jsx";

export default function NavbarBattery() {
    const {state: {battery}} = useDeviceContext();
    return <div className={styles.navbarBattery_mainContainer}>
        <div className={styles.navbarBattery_mainWrapper}>
            <div className={styles.navbarBattery_batteryStatus} style={{width:`${battery}%`}} />
            <p className={styles.navbarBattery_countText}>{battery}</p>
        </div>
    </div>
}