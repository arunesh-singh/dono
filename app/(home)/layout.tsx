import { Navbar } from "@/components/home/dashboard/navabar";
import { Sidebar } from "@/components/home/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-full flex">
      <div className="m-6 w-48 rounded-xl">
        <Sidebar />
      </div>
      <div className=" rounded-tl-[2rem] w-full bg-[#1A1B22] space-y-4">
        <header className="fixed top-2  flex h-16 items-center gap-4  p-8 z-10 w-full">
          <Navbar />
        </header>
        <div className="h-[93vh] pt-16">{children}</div>
      </div>
    </div>
  );
}
