import useNews from "../hooks/useNews"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]

export default function Form() {

  const { categoria, handleChangeCategoria } = useNews()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel id="select-label">Categoría</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={categoria}
          onChange={handleChangeCategoria}>
          {CATEGORIAS.map((categoria) => (
            <MenuItem
              key={categoria.value}
              value={categoria.value}
            >{categoria.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  )
}
