import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from './context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </I18nextProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;
