import './App.css';
import HomePage from './pages/HomePage';
import DataMahasiswaPage from './pages/DataMahasiswaPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TambahDataPage from './pages/TambahDataPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_mhs" element={<DataMahasiswaPage />} />
        <Route path="/tambah_data" element={<TambahDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
