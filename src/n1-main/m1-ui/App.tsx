import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Routers from "./routes/Routers";
import Header from "./header/Header";
import {Grid, ThemeProvider} from "@material-ui/core";
import {theme} from "./styles/main";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <div className="App">
                    <Header/>
                    <Grid container justify="space-around">
                        <Grid item md={10} sm={11} xs={12}>
                            <Routers/>
                        </Grid>
                    </Grid>
                </div>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
