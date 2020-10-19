import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routers from "./routes/Routers";
import Header from "./header/Header";
import {Grid, ThemeProvider} from "@material-ui/core";
import {theme} from "./styles/main";

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
