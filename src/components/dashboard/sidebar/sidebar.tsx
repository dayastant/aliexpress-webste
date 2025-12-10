import Logo from "@/components/shared/logo";
import { currentUser } from "@clerk/nextjs/server";
import { FC } from "react";

interface sidebarProps {
    isAdmin? : Boolean;
}

const sidebar : FC<sidebarProps> = async ({isAdmin}) =>{
    const user = await currentUser();
    return <div className="w-[300px] border-r h-screen p-4 flex flex-col fixed top-0 left-0 bottom-0">
        <Logo width={""} height={""} />

    </div>
}
export default sidebar;