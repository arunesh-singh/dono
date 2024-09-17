import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ThemeToogle } from "@/components/theme-toogle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConnectWallet } from "../connect-wallet";

export const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4  md:gap-2 lg:gap-4 px-8 bg-ye mr-64">
      <div className="flex w-full items-center  md:gap-2 lg:gap-4">
        <form className=" flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search address..."
              className="pl-10 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-full h-12 bg-[#1F212A] border-none"
            />
          </div>
        </form>
        <Select>
          <SelectTrigger className="w-[180px] h-12 rounded-full border-none bg-[#1F212A]">
            <SelectValue placeholder="All chains" />
          </SelectTrigger>
          <SelectContent className="bg-[##1F212A] rounded-xl">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex  items-center  md:gap-2 lg:gap-4">
        <ThemeToogle />
        <Select>
          <SelectTrigger className="w-[180px] h-12 rounded-full border-none bg-[#1F212A]">
            <SelectValue placeholder="Network" />
          </SelectTrigger>
          <SelectContent className="bg-[##1F212A] rounded-xl">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="w-40">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};
