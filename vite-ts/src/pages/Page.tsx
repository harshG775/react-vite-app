import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <main className="grid place-content-center min-h-screen gap-y-4">
            <div className="text-3xl font-bold underline">Root page</div>
            <Button>Click me</Button>
        </main>
    );
}
