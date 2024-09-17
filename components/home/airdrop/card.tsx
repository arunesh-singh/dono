"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Airdrop } from "../airdrop";
import { useState } from "react";

export const AirdropCard: React.FC<{}> = () => {
  const [amount, setAmount] = useState("0");
  return (
    <Card className="w-[500px] p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1>Request Airdrop</h1>
      </div>
      <div className="p-4 bg-[#16171E] rounded-2xl space-y-8">
        <div className="w-full">
          <h1 className="text-base text-muted-foreground leading-8">
            Enter Amount
          </h1>
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            type="number"
            className="rounded-2xl h-12 pl-6 text-lg"
          />
        </div>
      </div>

      <Airdrop amount={amount} />
    </Card>
  );
};
