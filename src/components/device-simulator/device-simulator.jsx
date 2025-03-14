import styles from "./device-simulator-styles.module.css";
import StatusBar from "./sub-components/status-bar/status-bar.jsx";
import Navbar from "./sub-components/navbar/navbar.jsx";
import StatusDescription from "./sub-components/status-description/status-description.jsx";
import StatusMedia from "./sub-components/status-media-image/status-media-image.jsx";
import UserStatus from "./sub-components/user-status/user-status.jsx";

export default function DeviceSimulator() {
    return <div className={styles.deviceSimulator_mainContainer} id={"device-simulator"}>
        <Navbar />
        <StatusBar />
        <UserStatus />
        <StatusMedia />
        <StatusDescription />
    </div>
}