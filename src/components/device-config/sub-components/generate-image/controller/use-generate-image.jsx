import domtoimage from 'dom-to-image';
import {useDeviceContext} from "../../../../../context/device-context.jsx";

export default function useGenerateImage() {
    const {
        state: {imageName},
    } = useDeviceContext();

    function handleGenerateImage() {
        const device = document.getElementById('device-simulator');

        domtoimage.toJpeg(device, {quality: 1}).then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = `${imageName || Date.now()}.jpeg`;
            link.href = dataUrl;
            link.click();
        })
    }

    return {handleGenerateImage}
}