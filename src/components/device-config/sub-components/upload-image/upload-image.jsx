import styles from "./upload-image-styles.module.css";
import {GoFileMedia} from "react-icons/go";
import {MdUpload} from "react-icons/md";
import useUploadImage from "./controller/use-upload-image.jsx";

export default function UploadImage() {
    const {handleUploadImage} = useUploadImage();

    return <div className={styles.uploadImage_mainContainer}>
        <div className={styles.uploadImage_container}>
            <GoFileMedia />
            Upload Image
        </div>
        <div className={styles.uploadImage_inputContainer}>
            <input className={styles.uploadImage_input} type="file" accept="image/png, image/jpeg, image/jpg" id={"status-count"} placeholder={"0"} onChange={handleUploadImage}/>
            <MdUpload />
        </div>
    </div>
}