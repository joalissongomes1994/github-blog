import { formatDistanceToNow } from 'date-fns'
import BR from 'date-fns/locale/pt-BR'

export const dateFormatter = (date: string) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: BR,
  })
}
