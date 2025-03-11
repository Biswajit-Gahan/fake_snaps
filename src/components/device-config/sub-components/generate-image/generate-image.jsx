import styles from "./generate-image-styles.module.css";
import useGenerateImage from "./controller/use-generate-image.jsx";

export default function GenerateImage() {
    const {
        handleGenerateImage
    } = useGenerateImage();

    return <div className={styles.generateImage_mainContainer}>
        <button className={styles.generateImage_button} type={"button"} onClick={handleGenerateImage}>GENERATE</button>
    </div>
}