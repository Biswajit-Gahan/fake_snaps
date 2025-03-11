import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useTotalViews() {
    const {state, dispatch} = useDeviceContext();

    function handleTotalViewsInput(event) {
        let value = +event.target.value.trim();

        const min = 0;

        if(!value || value < min) value = 0;

        dispatch({
            type: "SET_TOTAL_VIEWS",
            payload: value,
        })
    }

    return {
        totalViews: state.totalViews, handleTotalViewsInput
    }
}