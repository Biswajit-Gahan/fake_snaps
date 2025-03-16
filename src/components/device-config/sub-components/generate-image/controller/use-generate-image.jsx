import domtoimage from 'dom-to-image';
import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useGenerateImage() {
    const {
        state: {imageName},
    } = useDeviceContext();

    function handleGenerateImage() {
        const device = document.getElementById('device-simulator');

        domtoimage.toJpeg(device).then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = `${imageName || Date.now()}.jpg`;
            link.href = dataUrl;
            link.click();
        })
    }

    return {handleGenerateImage}
}