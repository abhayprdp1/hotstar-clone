import { useContext } from "react";
import ContentContext from "../contexts/ContentContext";

// NO CURLY BRACES because you exported ContentContext as default
const useContent = () => useContext(ContentContext);

export default useContent;
