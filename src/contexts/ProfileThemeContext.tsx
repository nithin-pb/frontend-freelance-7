import { createContext } from "react";


const ProfileThemeContext = createContext<IProfileThemeContext>({
    activeTheme: 'Earth',
    setActiveTheme: (e: any) => { }
});



interface IProfileThemeContext {
    activeTheme: string,
    setActiveTheme: (e: any) => any
}
export default ProfileThemeContext;