import {Button, Container, Navbar} from "react-bootstrap";
import appLogo from '../../src/assets/kobecoin.png'

export const Header = ({ setTxCreation, setShowPendingTxList, pendingTxList }:any) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => {
                    setShowPendingTxList(false)
                    setTxCreation(false)
                    window.location.reload()
                }}><img
                    src={appLogo}
                    width="130"
                    height="50"
                    className="d-inline-block align-top"
                /></Navbar.Brand>
                <Container>
                    <Button variant="outline-secondary" onClick={() => {
                        setShowPendingTxList(true)
                        setTxCreation(false)
                    }}>Pending Transactions ({pendingTxList.length})</Button>
                    <Button variant="outline-secondary" onClick={() => setTxCreation(true)}>Create Transaction</Button>
                </Container>
            </Container>
        </Navbar>
    )
}
