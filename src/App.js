import React from "react";
import HomeView from "./views/home/home.view";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ApiView from "./views/api/api.view";
import ContactView from "./views/contact/contact.view";
import WebsiteView from "./views/website/website.view";
import { AnimateSharedLayout } from "framer-motion";
import MenuView from "./views/menu/menu.view";
import GameView from "./views/game/game.view";
import AboutView from "./views/about/about.view";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <React.StrictMode>
          <CustomCursor
            targets={['.link', '.your-css-selector']}
            customClass='custom-cursor'
            dimensions={35}
            fill='#ABB8C3'
            smoothness={{
              movement: 0.25,
              scale: 0.1,
              opacity: 0.2,
            }}
            targetOpacity={0.5}
          />
          <AnimateSharedLayout>
            <Routes>
              <Route index element={<HomeView />} />
              <Route path="/menu" element={<MenuView />} />
              <Route path="/project/game" element={<GameView />} />
              <Route path="/project/api" element={<ApiView />} />
              <Route path="/project/website" element={<WebsiteView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/about" element={<AboutView />} />
            </Routes>
          </AnimateSharedLayout>
        </React.StrictMode>
      </Router>
    </div>
  );
}

export default App;
