import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useStatusMessage() {
    const {state, dispatch} = useDeviceContext();

    function handlerStatusMessageInput(event) {
        const value = event.target.value;

        dispatch({
            type: "SET_STATUS_MESSAGE",
            payload: value,
        })
    }

    return {
        statusMessage: state.statusMessage, handlerStatusMessageInput
    }
}