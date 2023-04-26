import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer.tsx";
import {Container, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {apiHelper} from "../../helpers/api.ts";
import {truncate} from "../Transaction.tsx";
import { useParams } from 'react-router';
import coinlogo from '../../assets/kobecoin.svg'

const renderTxList = (txList: any) => {

    return(
        txList.map((tx: any, id: any) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>
                        <span>
                            { tx.fromAddress.toLowerCase() !== 'system' ? truncate(tx.fromAddress, 20) : 'system'}
                        </span>
                    </td>
                    <td>
                        <span>
                            {truncate(tx.toAddress, 20)}
                        </span>
                    </td>
                    <td>{tx.amount}</td>
                    <td>
                        <span>
                            {new Date(tx.timestamp).toUTCString()}
                        </span>
                    </td>
                </tr>
            )
        })
    )
}

const renderTableHeader = (txList: any) => {
    if (txList.length <= 0) {
        return (
            <div>
                <div>This block has no transactions</div>
            </div>
        )
    }

    return (
        <thead>
        <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Timestamp</th>
        </tr>
        </thead>
    )
}

export const Wallet = ({ block }: any) => {
    const { id } = useParams();
    const walletAddress = id
    const transactionList: Array<any> = []

    block.forEach((item: any) => {
        item.transactions.forEach((tx: any) => {
            if (tx.fromAddress === walletAddress || tx.toAddress === walletAddress) {
                transactionList.push(tx)
            }
        })
    })

    console.log(transactionList)

    const [walletBalance, setWalletBalance] = useState(0)

    useEffect(() => {
        apiHelper.get(`wallet/balance/${walletAddress}`).then(res => {
            setWalletBalance(parseInt(res.data.balance))
        })
    }, [])


    return(
        <Container>
            <Header/>
            <h1>Wallet Details</h1>
            <p>Address:</p>
            <p style={{"color": '#' + walletAddress?.substring(0, 6)}}>{walletAddress}</p>
            <p>Balance:</p>
            <p>{walletBalance}<img
                src={coinlogo}
                width="100"
                height="50"
            /></p>
            <Container>
                <h2>
                    Transactions
                </h2>

                <Table striped bordered hover>
                    {renderTableHeader(transactionList)}
                    <tbody>
                    {renderTxList(transactionList)}
                    </tbody>
                </Table>
            </Container>
            <Footer/>
        </Container>

    )
}
