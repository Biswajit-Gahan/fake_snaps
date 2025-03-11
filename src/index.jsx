import {createRoot} from "react-dom/client";
import App from "./app";
import {StrictMode} from "react";
import "./global-styles.css";

createRoot(
    document.getElementById("root"),
).render(
    <StrictMode>
        <App/>
    </StrictMode>
)