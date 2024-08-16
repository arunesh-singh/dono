import { Navbar } from "@/components/home/dashboard/navabar";
import { Sidebar } from "@/components/home/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-full flex">
      <div className="m-6  w-40 rounded-xl">{/* <Sidebar /> */}</div>
      <div className=" rounded-tl-[2rem] w-full">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
