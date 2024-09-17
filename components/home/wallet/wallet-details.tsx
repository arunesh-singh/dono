type Wallet = {
  seed: string[];
  secret: string;
  publicKey: string;
  balance?: number;
};

export const WalletDetails = ({ wallet }: { wallet: Wallet }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2 ">
        <h4 className="text-xl font-bold">Public Key</h4>
        <h1 className="bg-background p-2 rounded-lg text-base">
          {wallet.publicKey}
        </h1>
      </div>
      <div className="space-y-2 ">
        <h4 className="text-xl font-bold">Private Key</h4>
        <p className="bg-background p-2 rounded-lg text-base break-normal">
          {wallet.secret}
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold">Seed Phrase</h4>
        <div className="grid gap-2 grid-cols-4 ">
          {wallet.seed.map((word, i) => (
            <div
              key={i}
              className="bg-background p-2 flex items-center justify-center rounded-lg">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
