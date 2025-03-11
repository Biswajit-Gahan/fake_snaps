import styles from "./network-sim-styles.module.css";
import {MdNetworkCell} from "react-icons/md";
import useNetworkSim from "./controller/use-network-sim.jsx";

export default function NetworkSim({name, simType}) {
    const {
        sim,
        handleSimInput,
    } = useNetworkSim(simType);

    return <div className={styles.networkSim_mainContainer}>
        <div className={styles.networkSim_container}>
            <MdNetworkCell />
            {name}
        </div>
        <div className={styles.networkSim_inputContainer}>
            <input className={styles.networkSim_input} type="number" id={"network-sim"} placeholder={"0"} step={25} min={25} max={100} value={sim} onChange={handleSimInput}/>
        </div>
    </div>
}
