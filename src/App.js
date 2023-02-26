import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import LoginPage from './components/LoginPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/book-list' element={<BookList />}/>
        <Route path='/' element={<BookList />}/>
        <Route path='/books/:id' element={<BookDetails />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
