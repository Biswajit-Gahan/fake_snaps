import domtoimage from 'dom-to-image';

export default function useGenerateImage() {
    function handleGenerateImage() {
        const device = document.getElementById('device-simulator');

        domtoimage.toPng(device).then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = `${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        })
    }

    return {handleGenerateImage}
}