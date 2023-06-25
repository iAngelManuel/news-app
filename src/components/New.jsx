import { formatDate } from "../helpers/index"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

export default function New({ newItem }) {
  const { urlToImage, title, description, source, publishedAt, url } = newItem
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Imagen de ${title}`}
            image={urlToImage}
            height="250"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="body1" color="error">{source.name}</Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">{description}</Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="body1" color="error">{formatDate(publishedAt)}</Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            rel="noopener"
            underline="none"
            variant="button"
            color="primary"
            width="100%"
            textAlign="center"
          >Ver más</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
