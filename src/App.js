import Header from './Header';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import './App.scss'

function App() {
    return (
        <Container>
            <header className="app-header">
                <Header />
            </header>
            <main className="app-main">
                <Body />
                <aside className="app-sidebar container">
                    <Sidebar />
                </aside>
            </main>
            <footer className="app-footer">
                <Footer />
            </footer>
        </Container>
    );
}

export default App;
