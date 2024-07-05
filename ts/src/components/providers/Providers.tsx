import TanstackQueryProvider from "./tanstack-query-provider";
import { ThemeProvider } from "./theme-provider";

type ProvidersPropsType = { children: React.ReactNode };
export default function Providers({ children }: ProvidersPropsType) {
    return (
        <TanstackQueryProvider>
            <ThemeProvider storageKey="vite-ui-theme" defaultTheme="system">
                {children}
            </ThemeProvider>
        </TanstackQueryProvider>
    );
}
