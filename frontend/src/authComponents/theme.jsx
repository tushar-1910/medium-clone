import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc2779",
    },
    secondary:{
        main: "#e0e0e0",
    },
    error: {
      main: "#ff0000",
    },
  },
});

export { theme }