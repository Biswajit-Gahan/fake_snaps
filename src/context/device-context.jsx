import defaultThumbnail from "../assets/default-thumbnail.jpg";
import {createContext, useContext, useReducer} from "react";

const initialState = {
    battery: 50,
    sim1: 100,
    sim2: 25,
    statusCount: 1,
    statusLapse: 35,
    screenshotHour: 1,
    screenshotMinute: 30,
    totalViews: 50,
    image: defaultThumbnail,
    statusMessage: "",
}

const Context = createContext(null);

function reducer(state, {type, payload}) {
    switch (type) {
        case "SET_BATTERY": {
            return {...state, battery: payload};
        }
        case "SET_SIM_1": {
            return {...state, sim1: payload};
        }
        case "SET_SIM_2": {
            return {...state, sim2: payload};
        }
        case "SET_STATUS_COUNT": {
            return {...state, statusCount: payload};
        }
        case "SET_STATUS_LAPSE": {
            return {...state, statusLapse: payload};
        }
        case "SET_SCREENSHOT_HOUR": {
            return {...state, screenshotHour: payload};
        }
        case "SET_SCREENSHOT_MINUTE": {
            return {...state, screenshotMinute: payload};
        }
        case "SET_TOTAL_VIEWS": {
            return {...state, totalViews: payload};
        }
        case "SET_STATUS_MESSAGE": {
            return {...state, statusMessage: payload};
        }
        case "SET_IMAGE": {
            return {...state, image: payload};
        }
        default: return {...state};
    }
}

export default function DeviceContext({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
}

export function useDeviceContext() {
    const context = useContext(Context);
    if(!context){
        throw new Error("useDeviceContext must be used within Context");
    }
    return context;
}