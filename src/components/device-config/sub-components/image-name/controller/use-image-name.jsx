import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useImageName() {
    const {state, dispatch} = useDeviceContext();

    function handleImageNameInput(event) {
        const value = event.target.value;
        dispatch({
            type: "SET_IMAGE_NAME",
            payload: value.trim()
        })
    }

    return {
        imageName: state.imageName,
        handleImageNameInput: handleImageNameInput,
    }
}