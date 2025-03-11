import Home from "./pages/home/home.jsx";
import DeviceContext from "./context/device-context.jsx";

export default function App() {
    return <main>
        <DeviceContext>
            <Home />
        </DeviceContext>
    </main>
}