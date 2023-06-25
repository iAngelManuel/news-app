import NewsProvider from "./context/NewsProvider"
import Form from "./components/Form"
import NewsCountryList from "./components/NewsList"
import { Container, Grid, Typography } from "@mui/material"

export default function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography variant="h1" component="h1" align="center" marginY={5}>Buscador de Noticias</Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <Form />
          </Grid>
        </Grid>
        <NewsCountryList />
      </Container>
    </NewsProvider>
  )
}
