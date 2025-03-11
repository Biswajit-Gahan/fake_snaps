import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useBattery() {
    const {state, dispatch} = useDeviceContext();

    function handlerBatteryInput(event) {
        const value = +event.target.value.trim();

        const min = 0;
        const max = 100;

        if(!value || value < min || value > max) return;

        dispatch({
            type: "SET_BATTERY",
            payload: value,
        })
    }

    return {
        battery: state.battery, handlerBatteryInput
    }
}