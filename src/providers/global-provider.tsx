import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import { AuthorizationContext, ProfileThemeContext } from "../contexts"
import { ThemeProvider, QueryProvider } from '.'

export default function GlobalProvider({ children }: IGlobalProvider) {
    // context and initialization goes here
    const [authorization, setAuthorization] = useState({
        authorized: true,
        accessToken: '45656454'
    })
    const [activeTheme, setActiveTheme] = useState('Earth')

    return (
        <Router>
            <QueryProvider>
                <ThemeProvider>
                    <AuthorizationContext.Provider value={{ authorization, setAuthorization }}>
                        <ProfileThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
                            {children}
                        </ProfileThemeContext.Provider>
                    </AuthorizationContext.Provider>
                </ThemeProvider>
            </QueryProvider>
        </Router >
    )
}

interface IGlobalProvider {
    children: React.ReactElement
}