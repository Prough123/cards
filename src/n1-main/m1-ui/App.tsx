import React from 'react';
import './App.css';
import Routers from "./routes/Routers";
import Header from "./header/Header";
import {theme} from "./styles/main";
import {BrowserRouter} from "react-router-dom";
import {Grid, ThemeProvider} from "@material-ui/core";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Grid container justify="space-around">
                        <Grid item md={10} sm={11} xs={12}>
                            <Routers/>
                        </Grid>
                    </Grid>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
