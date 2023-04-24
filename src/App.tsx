import './App.scss';
import {Header} from "./Components/Header.tsx";
import {Block} from "./Components/Block.tsx";
import {Transaction} from "./Components/Transaction.tsx";
import {useEffect, useState} from "react";
import {apiHelper} from "./helpers/api.ts";
import {CreateTransactionForm} from "./Components/CreateTransactionForm.tsx";
import {PendingTransactionList} from "./Components/PendingTransaction.tsx";

export default function App() {
    const [blockchain, setBlockchain] = useState([]);
    const [pendingTxList, setPendingTxList] = useState([]);
    const [selectedBlockIndex, setSelectedBlockIndex ] = useState( 0);
    const [txCreation, setTxCreation]= useState( false);
    const [showPendingTxList, setShowPendingTxList] = useState(false)
    const [walletAddress, setWalletAddress]= useState(null);

    useEffect(() => {
        apiHelper.get('/getChain').then((response) => {
            setBlockchain(response.data.chain);
        });

        apiHelper.get('/transaction/pendingList').then((response) => {
            setPendingTxList(response.data);
        });

        apiHelper.post('/wallet/create').then((response) => {
            localStorage.setItem('walletId', response.data.walletAddress)
            if (!walletAddress) setWalletAddress(response.data.walletAddress)
        });
    }, []);

    return (
        <>
            <Header setTxCreation={setTxCreation} setShowPendingTxList={setShowPendingTxList} pendingTxList={pendingTxList}/>
            <Block block={blockchain} setSelectedBlockIndex={setSelectedBlockIndex} txCreation={txCreation} setTxCreation={setTxCreation} showPendingTxList={showPendingTxList}></Block>
            <Transaction block={blockchain} selectedBlockIndex={selectedBlockIndex} txCreation={txCreation} setTxCreation={setTxCreation} showPendingTxList={showPendingTxList}></Transaction>
            <CreateTransactionForm txCreation={txCreation} setTxCreation={setTxCreation} walletAddress={walletAddress} showPendingTxList={showPendingTxList}></CreateTransactionForm>
            <PendingTransactionList txCreation={txCreation} setTxCreation={setTxCreation} pendingTxList={pendingTxList} showPendingTxList={showPendingTxList} rewardWalletId={walletAddress}></PendingTransactionList>
            <footer className="text-muted text-center">
                <small>For educational purposes only.
                    <a href="https://github.com/kobenguyent/blockchain-ui-fun" target="_blank">Source code</a></small>
            </footer>
        </>
    )
}
