import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {apiHelper} from "../helpers/api.ts";

export const CreateTransactionForm = ({ txCreation = false, setTxCreation, walletAddress }: any) => {
    if (txCreation) {
        setTxCreation(true)

        const handleOnSubmit = (event: any) => {
            event.preventDefault();
            apiHelper.post('/transaction/add', {
                "from": event.target[0].value,
                "to": event.target[1].value,
                "amount": event.target[2].value
            }).then((response) => {
                console.log(response.data)
            }).catch(e => {
                throw Error(e.message)
            });
            window.location.reload()
        }

        return (
            <Container>
                <h1>Create Transactions</h1>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="fromAddress">
                        <Form.Label>From wallet address</Form.Label>
                        <Form.Control type="text" placeholder="fa1576629e6f160e343c61872722265f4cb5f1baf97856fd5b59a87501108f0d" value={walletAddress}/>
                        <Form.Text className="text-muted">
                            This is your wallet address.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="toAddress">
                        <Form.Label>To wallet address</Form.Label>
                        <Form.Control type="text" placeholder="fa1576629e6f160e343c61872722265f4cb5f1baf97856fd5b59a87501108f0d" value={walletAddress}/>
                        <Form.Text className="text-muted">
                            The address of the wallet where you want to send the money to.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="1" required value="1"/>
                        <Form.Text className="text-muted">
                            You can transfer any amount. Account balance is not checked in this demo. Have at it!
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create Transaction
                    </Button>
                </Form>
            </Container>

        )
    }

    return (
        <></>
    )
}
