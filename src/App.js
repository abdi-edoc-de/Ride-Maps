import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MiniDrawer from './Components/MiniDrawer';
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';


function App() {


  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <MiniDrawer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
