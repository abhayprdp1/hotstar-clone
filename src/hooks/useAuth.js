import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// Use curly braces ONLY if you exported AuthContext as a named export
const useAuth = () => useContext(AuthContext);

export default useAuth;
