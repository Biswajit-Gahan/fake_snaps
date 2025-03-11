import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useScreenshotTime() {
    const {state, dispatch} = useDeviceContext();

    function handlerHourInput(event) {
        const value = +event.target.value.trim();

        const min = 1;
        const max = 12;

        if(!value || value < min || value > max) return;

        dispatch({
            type: "SET_SCREENSHOT_HOUR",
            payload: event.target.value,
        })
    }

    function handlerMinuteInput(event) {
        let value = +event.target.value.trim();

        const min = 0;
        const max = 59;

        if(!value || value < min || value > max) return;

        dispatch({
            type: "SET_SCREENSHOT_MINUTE",
            payload: event.target.value,
        })
    }

    return {
        screenshotHour: state.screenshotHour, screenshotMinute: state.screenshotMinute, handlerHourInput, handlerMinuteInput
    }
}