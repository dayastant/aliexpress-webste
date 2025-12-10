import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


export default async function DashboardPage(){

    

    const user = await currentUser();
    //user dashboard page
    if(!user?.privateMetadata?.role || user?.privateMetadata.role==="USER")
        redirect("/")
    //admin dashboard page
    if(user.privateMetadata.role==="ADMIN") redirect("/dashboard/admin");
    //seller dashboard page
    if(user.privateMetadata.role === "SELLER") redirect("/dashboard/seller");
    return <div>
        Dashboard page
    </div>
}