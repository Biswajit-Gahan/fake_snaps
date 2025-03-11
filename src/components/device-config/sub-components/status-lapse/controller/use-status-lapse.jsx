import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useStatusLapse() {
    const {state, dispatch} = useDeviceContext();

    function handlerStatusLapseInput(event) {
        const value = +event.target.value.trim();

        const min = 0;
        const max = 100;

        if(!value || value < min || value > max) return;

        dispatch({
            type: "SET_STATUS_LAPSE",
            payload: value
        })
    }

    return {
        statusLapse: state.statusLapse, handlerStatusLapseInput
    }
}