export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const formattedDate = date.toLocaleDateString('es-ES', options)
  return formattedDate
}