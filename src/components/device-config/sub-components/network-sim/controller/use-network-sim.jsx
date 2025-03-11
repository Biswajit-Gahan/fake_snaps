import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useNetworkSim(simType) {
    const simTypes = ["sim1", "sim2"];

    if(!simTypes.includes(simType)){
        throw new Error("invalid simType");
    }

    const {state, dispatch} = useDeviceContext();

    function handleSimInput(event) {
        let value = event.target.value;

        const simValues = [25, 50, 75, 100];

        if(!simValues.includes(+value)){
            value = 100;
        }

        dispatch({
            type: simType === "sim1" ? "SET_SIM_1" : "SET_SIM_2",
            payload: value
        });
    }

    return {
        sim: state[simType], handleSimInput
    }
}