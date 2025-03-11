import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useStatusCount() {
    const {state, dispatch} = useDeviceContext();

    function handlerStatusCountInput(event) {
        let value = +event.target.value;
        const min = 0;
        const max = 4

        if(!value || value < min || value > max) value = 0

        dispatch({
            type: "SET_STATUS_COUNT",
            payload: value
        })
    }

    return {
        statusCount: state.statusCount, handlerStatusCountInput
    }
}