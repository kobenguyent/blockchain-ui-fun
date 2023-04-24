import {Container, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {apiHelper} from "../helpers/api.ts";

const truncate = (str: string, length = 7) => {
    return str.length > 10 ? str.substring(0, length) + "..." : str;
}

const renderTxList = (list: any) => {
        return list.map((tx: any, id: any) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>
                        <span>
                            {truncate(tx.fromAddress, 20)}
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
}

export const PendingTransactionList = ({ pendingTxList, txCreation, setTxCreation, showPendingTxList, rewardWalletId }:any) => {
    const mineTransaction = () => {
    apiHelper.post(`/transaction/mine/${rewardWalletId}`).then(() => {
        alert('All transactions are mined!');
        window.location.reload()
    });
    }

    if (txCreation === false) {
        setTxCreation(false)

        if (showPendingTxList) {
            return (
                <Container>
                    <h1>
                        Pending Transactions
                    </h1>
                    These transactions are waiting to be included in the next block. Next block is created when you start the mining process.

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Timestamp</th>
                        </tr>
                        </thead>
                        <tbody>
                            {renderTxList(pendingTxList)}
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={mineTransaction}>
                        Mine transactions
                    </Button>
                </Container>
            )
        }

    }

    return (<></>)
}
