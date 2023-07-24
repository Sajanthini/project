
import Header from './Components/Header';
import Head from './Components/Head';
import Nav from './Components/Nav';
import Slide from './Components/Slide';
import Solutions from './Components/Solutions';
//import DistrictLocation from './Components/DistrictLocation';
import PDFViewer from './Components/PDFViewer';
import Exchange from './Components/Exchange';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Head />
      <Slide />
      <Nav />
      <Solutions />
      <PDFViewer />
      <Exchange />
      <Footer />
    </div>
  );
}

export default App;
