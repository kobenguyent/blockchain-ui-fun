import {Button, Container, Navbar} from "react-bootstrap";

export const Header = ({ setTxCreation, setShowPendingTxList }:any) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => {
                    setShowPendingTxList(false)
                    setTxCreation(false)
                }}>KobeCoin</Navbar.Brand>
                <Container>
                    <Button variant="outline-secondary" onClick={() => {
                        setShowPendingTxList(true)
                        setTxCreation(false)
                    }}>Pending Transactions</Button>
                    <Button variant="outline-secondary" onClick={() => setTxCreation(true)}>Create Transaction</Button>
                </Container>
            </Container>
        </Navbar>
    )
}
