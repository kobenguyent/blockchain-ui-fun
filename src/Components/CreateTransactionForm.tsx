import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {apiHelper} from "../helpers/api.ts";
import {Footer} from "./Footer.tsx";
import {Header} from "./Header/Header.tsx";
import {InfoModal} from "./InfoModal.tsx";
import {useState} from "react";
let anotherWalletId: string;

export const CreateTransactionForm = ({ walletAddress }: any) => {
    const [show, setShow] = useState(false);

        const handleOnSubmit = (event: any) => {
            event.preventDefault();
            apiHelper.post('/transaction/add', {
                "from": event.target[0].value,
                "to": event.target[1].value,
                "amount": event.target[3].value
            }).then(() => setShow(true)).catch(e => {
                throw Error(e.message)
            });
        }

        const generateAnotherWalletId = async (event:any) => {
            event.preventDefault();
            anotherWalletId = (await apiHelper.post('/wallet/create')).data.walletAddress
            const result: any = document.querySelector('[data-testid="form-toAddress"]');
            result.value = anotherWalletId
        }

        return (
            <Container>
                <Header/>
                <h1>Create Transactions</h1>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="fromAddress">
                        <Form.Label>From wallet address</Form.Label>
                        <Form.Control type="text" placeholder="fa1576629e6f160e343c61872722265f4cb5f1baf97856fd5b59a87501108f0d" value={walletAddress} required disabled/>
                        <Form.Text className="text-muted">
                            This is your wallet address.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>To wallet address</Form.Label>
                        <Form.Control type="text" placeholder="fa1576629e6f160e343c61872722265f4cb5f1baf97856fd5b59a87501108f0d" required data-testid='form-toAddress'/>
                        <Form.Text className="text-muted">
                            The address of the wallet where you want to send the money to.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary"  data-testid='form-generateNewWalletId' onClick={generateAnotherWalletId}>
                        Generate new wallet Id
                    </Button>

                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="1" required data-testid='form-amount'/>
                        <Form.Text className="text-muted">
                            You can transfer any amount. Account balance is not checked in this demo. Have at it!
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" data-testid='form-createTransaction'>
                        Create Transaction
                    </Button>

                    <InfoModal title='Transaction Creation' bodyText='Woohoo, your transaction is created successfully!' setShow={setShow} show={show}></InfoModal>
                </Form>
                <Footer></Footer>
            </Container>
        )
    return (
        <></>
    )
}
