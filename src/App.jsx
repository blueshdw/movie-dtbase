import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MyPlaylistPage from "./pages/MyPlaylistPage";
import MyFavoritesPage from "./pages/MyFavoritesPage";
import Header from "./components/Header";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-playlist" element={<MyPlaylistPage />} />
          <Route path="/my-favorites" element={<MyFavoritesPage />} />
        </Routes>
    </>
  );
}

export default App;
