import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    // local → local backend
    return io(BASE_URL, {
      withCredentials: true,
    });
  } else {
    // production → connect to Render backend
    return io(import.meta.env.VITE_BACKEND_URL, {
      withCredentials: true,
      transports: ["websocket"], 
    });
  }
};
