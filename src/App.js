import Header from './Header';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <header className="app-header">
                <Header />
            </header>
            <main className="app-main">
                <Body />
            </main>
            <aside className="app-sidebar">
                <Sidebar />
            </aside>
            <footer className="app-footer">
                <Footer />
            </footer>
        </Fragment>
    );
}

export default App;
