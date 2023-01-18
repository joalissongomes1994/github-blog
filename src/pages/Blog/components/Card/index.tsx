import { ContainerCard } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'
import { IssueDataProps } from '../../../../hooks/useFetch'
import { formatDistanceToNow } from 'date-fns'
import BR from 'date-fns/locale/pt-BR'

interface CardProps {
  dataCard: IssueDataProps
}

export function Card({ dataCard }: CardProps) {
  const published =
    dataCard.created_at &&
    formatDistanceToNow(new Date(dataCard.created_at), {
      addSuffix: true,
      locale: BR,
    })

  return (
    <ContainerCard>
      <button>
        <header>
          <h2>{dataCard.title}</h2>
          <span>{published}</span>
        </header>

        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {dataCard.body}
          </ReactMarkdown>
        </div>
      </button>
    </ContainerCard>
  )
}
