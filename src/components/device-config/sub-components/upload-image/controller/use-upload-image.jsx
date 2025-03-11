import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useUploadImage() {
    const {dispatch} = useDeviceContext();

    function handleUploadImage(event) {
        const image = event.target.files[0];

        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.addEventListener("load", (event) => {
            console.log(event.target.result);
            dispatch({
                type: "SET_IMAGE",
                payload: event.target.result,
            })
        });


    }

    return {
        handleUploadImage,
    }
}