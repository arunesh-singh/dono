import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { SliderIcon } from "@radix-ui/react-icons";
import { TabsList } from "@radix-ui/react-tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardPage = () => {
  return (
    <div className="h-full w-full ">
      <ScrollArea className="p-2  bg-accent rounded-full mx-8">
        <div className="flex item-center">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 p-2  ">
              <span className="text-xs text-accent-foreground">#</span>
              <span className="text-xs text-accent-foreground">hashtag{i}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center justify-center h-full">
        <Card className="w-[500px] p-8 space-y-8">
          <div className="flex items-center justify-between">
            <Tabs defaultValue="swap" className="w-[200px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="swap">Swap</TabsTrigger>
                <TabsTrigger value="limit">Limit</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-4">
              <Button size="icon">
                <SliderIcon />
              </Button>
              <Button size="icon">
                <SliderIcon />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-[#16171E] rounded-2xl space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-base text-muted-foreground leading-8">
                  You pay
                </h1>
                <h1 className="text-[2.5rem] text-white">1.32</h1>
              </div>
              <div>
                <span className="text-base text-muted-foreground leading-8 text-right">
                  Balance: 0.00
                </span>
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
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <Button>15%</Button>
              <Button>25%</Button>
              <Button>50%</Button>
              <Button>75%</Button>
              <Button>100%</Button>
            </div>
          </div>
          <div className="p-4 bg-[#16171E] rounded-2xl space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-base text-muted-foreground leading-8">
                  You receive
                </h1>
                <h1 className="text-[2.5rem] text-white">1.32</h1>
              </div>
              <div>
                <span className="text-base text-muted-foreground leading-8 text-right">
                  Balance: 0.00
                </span>
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
              </div>
            </div>
            <h5>Min received: 0.00</h5>
          </div>
          <h5 className="text-center">1ETH = 0.0001</h5>
          <Button size="lg" className="w-full ">
            Connect Wallet
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
