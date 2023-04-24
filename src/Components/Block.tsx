import {Button, Card, CardGroup, Container, ListGroup} from "react-bootstrap";

export const Block = ({ block, setSelectedBlockIndex, txCreation, setTxCreation, showPendingTxList }:any) => {
    if (txCreation === false) {
        setTxCreation(false)

        if (!showPendingTxList) {
            return (
                <Container>
                    <h1>Blocks on chain</h1>
                    Each card represents a block on the chain. Click on a block to see the transactions stored inside.
                    <CardGroup>
                        {block.map((item:any, i:any) => {
                            return (
                                <Card className="g-2" border="primary" key={i} onClick={() => setSelectedBlockIndex(i)}>
                                    <Card.Body>
                                        <Card.Title>Block #{i + 1}</Card.Title>
                                        <Card.Text>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item>Hash
                                                    <div className="text-truncate" style={{"color": '#' + item.hash.substring(0,6) }}>{item.hash}</div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>Previous hash
                                                    <div className="text-truncate" style={{"color": '#' + item.prevHash.substring(0,6) }}>{item.prevHash}</div>
                                                </ListGroup.Item>
                                                <ListGroup.Item> Nonce
                                                    <div className="text-truncate" style={{"color": 'grey' }}>{item.nonce}</div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>Timestamp
                                                    <div className="text-truncate" style={{"color": 'grey' }}>{item.timestamp}</div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                            <Button variant="primary">Show Transactions</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </CardGroup>
                </Container>
            )
        }

    }

    return (
        <></>
    )

}
