import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f73378',
            main: '#f50057',
            contrastText: '#fff',
        },
    },
});
