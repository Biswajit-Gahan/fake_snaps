import styles from "./navbar-styles.module.css";
import NavbarNetwork from "../navbar-network/navbar-network.jsx";
import NavbarBattery from "../navbar-battery/navbar-battery.jsx";
import {useDeviceContext} from "../../../../context/device-context.jsx";

export default function Navbar() {
    const {
        state: {
            screenshotHour,
            screenshotMinute,
        }
    } = useDeviceContext();

    return <div className={styles.navbar_mainContainer}>
        <p className={styles.navbar_time}>{screenshotHour}:{screenshotMinute < 10 ? `0${screenshotMinute}`: screenshotMinute}</p>
        <div className={styles.navbar_statusContainer}>
            <NavbarNetwork />
            <p className={styles.navbar_networkType}>5G</p>
            <NavbarBattery />
        </div>
    </div>
}
