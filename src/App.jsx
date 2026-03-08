import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import CheckIn from "./pages/CheckIn/CheckIn";
import Journal from "./pages/Journal/Journal";
import Complete from "./pages/Complete/Complete";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [choosedFeeling, setChoosedFeeling] = useState("");
  

   useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-V6HM8JTCHR', {
        page_path: location.pathname,
      });
    }
  }, [location]);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route
          path="/check-in"
          element={
            <CheckIn
              choosedFeeling={choosedFeeling}
              setChoosedFeeling={setChoosedFeeling}
            />
          }
        ></Route>
        <Route
          path="/reflect"
          element={
            <Journal
              answers={answers}
              setAnswers={setAnswers}
              choosedFeeling={choosedFeeling}
            />
          }
        ></Route>
        <Route
          path="/complete"
          element={<Complete answers={answers} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
