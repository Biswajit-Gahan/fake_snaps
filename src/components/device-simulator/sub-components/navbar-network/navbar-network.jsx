import styles from "./navbar-network-styles.module.css";
import {useDeviceContext} from "../../../../context/device-context.jsx";

export default function NavbarNetwork() {
    const {
        state: {
            sim1,
            sim2,
        }
    } = useDeviceContext();

    return <div className={styles.navbarNetwork_mainContainer}>
        <div className={styles.navbarNetwork_networkS1Wrapper}>
            <div className={`${styles.navbarNetwork_networkS1Bar} ${+sim1 >= 25 && styles.navbarNetwork_networkS1BarActive}`}/>
            <div className={`${styles.navbarNetwork_networkS1Bar} ${+sim1 >= 50 && styles.navbarNetwork_networkS1BarActive}`}/>
            <div className={`${styles.navbarNetwork_networkS1Bar} ${+sim1 >= 75 && styles.navbarNetwork_networkS1BarActive}`}/>
            <div className={`${styles.navbarNetwork_networkS1Bar} ${+sim1 === 100 && styles.navbarNetwork_networkS1BarActive}`}/>
        </div>

        <div className={styles.navbarNetwork_networkS2Wrapper}>
            <div className={`${styles.navbarNetwork_networkS2Bar} ${+sim2 >= 25 && styles.navbarNetwork_networkS2BarActive}`}/>
            <div className={`${styles.navbarNetwork_networkS2Bar} ${+sim2 >= 50 && styles.navbarNetwork_networkS2BarActive}`}/>
            <div className={`${styles.navbarNetwork_networkS2Bar} ${+sim2 >= 75 && styles.navbarNetwork_networkS2BarActive}`}/>
            <div className={`${styles.navbarNetwork_networkS2Bar} ${+sim2 === 100 && styles.navbarNetwork_networkS2BarActive}`}/>
        </div>
    </div>
}