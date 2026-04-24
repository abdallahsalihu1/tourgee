import { auth } from "@/auth";
import ReviewClient from "./review";
import { redirect } from "next/navigation";

export default async function Review () {
    const session = await auth()

    if (!session) {
        redirect("/signin")
    }
    
    return (
        <main>
            <ReviewClient session={session} />
        </main>
    )
}