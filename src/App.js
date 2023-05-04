import MainWindow from "./components/MainWindow";
import "./Style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
        contrastText: "#fff",
      },
      background: {
        default: "#f0f0f0",
        paper: "#fff",
      },
      text: {
        primary: "#000",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainWindow />
      </ThemeProvider>
    </Provider>
  );
}
