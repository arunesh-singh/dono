import { Airdrop } from "@/components/home/airdrop";
import { AirdropCard } from "@/components/home/airdrop/card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWalletStore } from "@/store/wallet-store";
import { SliderIcon } from "@radix-ui/react-icons";

const AirdropPage = () => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-center h-full">
        <AirdropCard />
      </div>
    </div>
  );
};

export default AirdropPage;
