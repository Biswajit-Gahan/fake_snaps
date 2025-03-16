import styles from "./image-name-styles.module.css";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import useImageName from "./controller/use-image-name.jsx";

export default function ImageName() {
    const {
        imageName,
        handleImageNameInput
    } = useImageName();

    return <div className={styles.imageName_container}>
        <div className={styles.imageName_wrapper}>
            <div className={styles.imageName_nameWrapper}><MdOutlineDriveFileRenameOutline/>Image Name</div>
            <input className={styles.imageName_input} type={"text"} placeholder={"Please enter image name"} value={imageName} onChange={handleImageNameInput} />
        </div>
    </div>
}