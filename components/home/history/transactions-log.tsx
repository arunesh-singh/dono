import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, ParsedTransactionWithMeta } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";

export const TransactionLog: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [transactionHistory, setTransactionHistory] = useState<
    ParsedTransactionWithMeta[] | null
  >(null);
  const [transactionTable, setTransactionTable] = useState<JSX.Element | null>(
    null
  );

  async function getTransactions(address, numTx) {
    const pubKey = new PublicKey(address);
    //Find recent transactions
    let transactionList = await connection.getSignaturesForAddress(pubKey, {
      limit: numTx,
    });
    //Parse transactions to get signature for recent transactions
    let signatureList = transactionList.map(
      (transaction) => transaction.signature
    );
    //Get parsed details of each transaction
    let transactionDetails = await connection.getParsedTransactions(
      signatureList,
      { maxSupportedTransactionVersion: 0 }
    );
    //Update State
    setTransactionHistory(
      transactionDetails.filter(
        (transaction) => transaction !== null
      ) as ParsedTransactionWithMeta[]
    );
  }

  return (
    <div className="px-16">
      <h1>Transaction Log</h1>
    </div>
  );
};
