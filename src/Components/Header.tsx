import {Button, Container, Navbar} from "react-bootstrap";
import appLogo from '../../src/assets/kobecoin.png'

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img
                    src={appLogo}
                    width="130"
                    height="50"
                    className="d-inline-block align-top"
                /></Navbar.Brand>
                <Container>
                    <Button variant="outline-secondary" href='pendingTransaction'>Pending Transactions</Button>
                    <Button variant="outline-secondary" href='createTransaction'>Create Transaction</Button>
                </Container>
            </Container>
        </Navbar>
    )
}
