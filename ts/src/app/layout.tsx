import { Outlet } from "react-router-dom";
import { ThemeProvider } from "src/components/providers/theme-provider";
import { ModeToggle } from "src/components/ui/ModeToggle";

export default function RootLayout() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle className="fixed bottom-4 right-4"/>
            <Outlet />
        </ThemeProvider>
    );
}
