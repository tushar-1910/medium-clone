import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc2779",
    },
    secondary:{
        main: "#bdbdbd",
    },
    error: {
      main: "#ff0000",
    },
  },
});

export { theme }