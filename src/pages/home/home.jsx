import styles from "./home-styles.module.css";
import DeviceSimulator from "../../components/device-simulator/device-simulator.jsx";
import DeviceConfig from "../../components/device-config/device-config.jsx";

export default function Home() {
    return <div className={styles.home_mainContainer}>
        <div className={styles.home_mainWrapper}>
            <div className={styles.home_deviceConfigContainer}>
                <h2 className={styles.home_brandName}>🔥Snapshot <sup className={styles.home_version}>v1.0.5</sup></h2>
                <DeviceConfig />
            </div>
            <div className={styles.home_deviceSimulatorContainer}>
                <DeviceSimulator />
            </div>
        </div>
    </div>
}