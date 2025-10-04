import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import LoadingScreen from "./components/includes/LoadingScreen";
import Navbar from "./components/includes/Navbar";
import MobileMenu from "./components/includes/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Article from "./components/sections/Article";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import ProjectPage from "./components/Pages/ProjectPage";
import ArticlePage from "./components/Pages/ArticlePage";
import Main from "./components/Pages/main";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menu0pen, setMenuOpen] = useState(false);

    return (
        <Router basename={import.meta.env.BASE_URL}>
            {!isLoaded && (
                <LoadingScreen onComplete={() => setIsLoaded(true)} />
            )}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } bg-black text-gray-100`}
            >
                <Navbar menu0pen={menu0pen} setMenuOpen={setMenuOpen} />
                <MobileMenu menu0pen={menu0pen} setMenuOpen={setMenuOpen} />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/allprojects" element={<ProjectPage />} />
                    <Route path="allarticles" element={<ArticlePage />} />
                    <Route
                        path="*"
                        element={
                            <div className="min-h-screen flex items-center justify-center text-2xl">
                                404 | Page Not Found
                            </div>
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
