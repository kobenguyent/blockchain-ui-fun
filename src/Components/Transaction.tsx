import {Container, Table} from "react-bootstrap";

const truncate = (str: string, length = 7) => {
    return str.length > 10 ? str.substring(0, length) + "..." : str;
}

const renderTxList = (block: any, index: any) => {
    if (block.length > 0 && block[index].transactions && block[index].transactions.length > 0) {
        return block[index].transactions.map((tx: any, id: any) => {
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
}

const renderTableHeader = (block: any, index: any) => {
    if (block.length > 0 && block[index].nonce === 0) {
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
export const Transaction = ({ block, selectedBlockIndex, txCreation, setTxCreation, showPendingTxList }:any) => {
    if (txCreation === false) {
        setTxCreation(false)

        if (!showPendingTxList) {
            return (
                <Container>
                    <br></br>
                    <h2>
                        Transactions of Block #{selectedBlockIndex}
                    </h2>

                    <Table striped bordered hover>
                        {renderTableHeader(block, selectedBlockIndex)}
                        <tbody>
                        {renderTxList(block, selectedBlockIndex)}
                        </tbody>
                    </Table>
                </Container>
            )
        }
    }

    return (<></>)
}
