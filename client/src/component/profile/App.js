
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./homePage/index";
import LoginPage from "./loginPage/index";
import ProfilePage from "./profilePage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


    function App() {
      const mode  = useSelector((state) => state.mode);
      const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

      // const theme = createStore()


      return (
        <div className="app">
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/home" element={<HomePage />} />
                <Route path="/:userId" element={<ProfilePage />} />
              </Routes>
            </ThemeProvider>
          </BrowserRouter>
        </div>
      );
    }

export default App;
