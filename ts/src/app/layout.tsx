import { Outlet } from "react-router-dom";
import { ModeToggle } from "src/components/ui/ModeToggle";

export default function RootLayout() {
    return (
        <>
            <ModeToggle className="fixed bottom-4 right-4" />
            <Outlet />
        </>
    );
}
