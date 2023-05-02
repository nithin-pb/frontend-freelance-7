import { useContext } from "react";
import { ProfileThemeContext } from "../contexts"

const useProfileTheme = () => {
    return useContext(ProfileThemeContext)
}

export default useProfileTheme