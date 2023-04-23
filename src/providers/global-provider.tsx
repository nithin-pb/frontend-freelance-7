import { BrowserRouter as Router } from "react-router-dom"
import { AuthorizationContext } from "../contexts"
import { ThemeProvider } from './theme-provider'

export default function GlobalProvider({ children }: IGlobalProvider) {
    // context and initialization goes here
    const authorization = true

    return (
        <Router>
            <ThemeProvider>
                <AuthorizationContext.Provider value={{ authorization }}>
                    {children}
                </AuthorizationContext.Provider>
            </ThemeProvider>
        </Router>
    )
}

interface IGlobalProvider {
    children: React.ReactElement
}