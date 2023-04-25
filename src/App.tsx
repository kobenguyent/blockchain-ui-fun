import './App.scss';
import {Header} from "./Components/Header/Header.tsx";
import {Block} from "./Components/Block/Block.tsx";
import {Transaction} from "./Components/Transaction.tsx";
import {useEffect, useState} from "react";
import {apiHelper} from "./helpers/api.ts";

export default function App() {
    const [blockchain, setBlockchain] = useState([]);
    const [, setPendingTxList] = useState([]);
    const [selectedBlockIndex, setSelectedBlockIndex ] = useState( 0);
    const [txCreation, setTxCreation]= useState( false);
    const [showPendingTxList,] = useState(false)

    useEffect(() => {
        apiHelper.get('/getChain').then((response) => {
            setBlockchain(response.data.chain);
        });

        apiHelper.get('/transaction/pendingList').then((response) => {
            setPendingTxList(response.data);
        });

    }, []);

    return (
        <>
            <Header/>
            <Block block={blockchain} setSelectedBlockIndex={setSelectedBlockIndex}></Block>
            <Transaction block={blockchain} selectedBlockIndex={selectedBlockIndex} txCreation={txCreation} setTxCreation={setTxCreation} showPendingTxList={showPendingTxList}></Transaction>
        </>
     )
}
