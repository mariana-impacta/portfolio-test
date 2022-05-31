import AboutMe from './components/aboutMe';
import Intro from './components/intro';
import Menu from './components/menu';

function App() {
    return (
        <div className="App">
            <Menu />
            <Intro />
            <AboutMe nome="Mariana" />
        </div>
    );
}

export default App;