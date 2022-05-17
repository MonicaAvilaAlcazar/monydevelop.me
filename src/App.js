import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Main from './Main'
import { Container } from 'react-bootstrap'
import './App.scss'

function App() {
    return (
        <Container>
            <header className="app-header">
                <Header />
            </header>
            <main className="app-main">
                <Main />
                <aside className="app-sidebar container">
                    <Sidebar />
                </aside>
            </main>
            <footer className="app-footer">
                <Footer />
            </footer>
        </Container>
    )
}

export default App
