import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-blue-500 fon-bold ">Home</h1>
      <h1 className="text-blue-500 fon-bold font-barlow">Home</h1>
      <Button>Daya</Button>
    </div>
  );
}
