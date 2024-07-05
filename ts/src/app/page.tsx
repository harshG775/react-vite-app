import axios from "axios";
import { Button } from "src/components/ui/button";
import { useQuery } from "@tanstack/react-query";
const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;
};
export default function HomePage() {
    const { data, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        enabled: false,
    });
    console.log(data);

    return (
        <main className="min-h-96 grid place-content-center">
            <h1 className="text-4xl font-semibold">Root page</h1>
            <Button onClick={() => refetch()}>fetch</Button>
        </main>
    );
}
