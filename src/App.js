import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { Lesson } from './pages/lesson/Lesson';
import { Contacts } from './pages/Contacts';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { NotFound } from './pages/not-found/NotFound';
import { GlobalStyle } from './styles/main';

export const App = () => {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [transcription, setTranscription] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar
          setTranscription={setTranscription}
          transcription={transcription}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route
            path="/lesson/:id"
            element={
              <Lesson
                currentLesson={currentLesson}
                setCurrentLesson={setCurrentLesson}
                transcription={transcription}
                setTranscription={setTranscription}
              />
            }
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
