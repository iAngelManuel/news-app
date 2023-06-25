import useNoticias from "../hooks/useNews"
import New from "./New"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

export default function NewsCountrysList() {
  const { news, totalPaginate, handleChangePage, paginate } = useNoticias()
  const totalPag = Math.ceil(totalPaginate / 20)
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        marginY={5}
      >Noticias</Typography>
      <Grid container spacing={2}>
        {news?.map(newItem => (
          <New
            key={newItem.url}
            newItem={newItem}
          />
        ))}
      </Grid>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginY={5}
      >
        <Pagination
          count={totalPag}
          color="primary"
          page={paginate}
          onChange={handleChangePage}
        />
      </Stack>
    </>
  )
}
