import styles from "./device-config.module.css";

import Battery from "./sub-components/battery/battery.jsx";
import NetworkSim from "./sub-components/network-sim/network-sim.jsx";
import StatusCount from "./sub-components/status-count/status-count.jsx";
import StatusLapse from "./sub-components/status-lapse/status-lapse.jsx";
import ScreenshotTime from "./sub-components/screenshot-time/screenshot-time.jsx";
import TotalViews from "./sub-components/total-views/total-views.jsx";
import StatusMessage from "./sub-components/status-message/status-message.jsx";
import UploadImage from "./sub-components/upload-image/upload-image.jsx";
import GenerateImage from "./sub-components/generate-image/generate-image.jsx";
import PublishedBefore from "./sub-components/published-before/published-before.jsx";
import ImageName from "./sub-components/image-name/image-name.jsx";

export default function DeviceConfig() {
    return <div className={styles.deviceConfig_mainContainer}>
        <div className={styles.deviceConfig_wrapper}>
            <Battery />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <NetworkSim name={"Network SIM 1"} simType={"sim1"}/>
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <NetworkSim name={"Network SIM 2"} simType={"sim2"}/>
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <StatusCount />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <StatusLapse />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <ScreenshotTime />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <PublishedBefore />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <TotalViews />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <UploadImage />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <ImageName />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <StatusMessage />
        </div>

        <div className={styles.deviceConfig_wrapper}>
            <GenerateImage />
        </div>
    </div>
}