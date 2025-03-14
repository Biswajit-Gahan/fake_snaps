import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function usePublishedBefore() {
    const {state, dispatch} = useDeviceContext();

    function handlerTimeInput(event) {
        const value = +event.target.value.trim();

        const min = 1;
        const max = 60;

        if(!value || value < min || value > max) return;

        dispatch({
            type: "SET_PUBLISHED_BEFORE_TIME",
            payload: value,
        })
    }

    function handlerTimeFormat(event) {
        let value = event.target.value.trim();

        dispatch({
            type: "SET_PUBLISHED_BEFORE_TIME_FORMAT",
            payload: value,
        })
    }

    return {
        publishedBeforeTime: state.publishedBeforeTime, publishedBeforeTimeFormat: state.publishedBeforeTimeFormat, handlerTimeInput, handlerTimeFormat
    }
}