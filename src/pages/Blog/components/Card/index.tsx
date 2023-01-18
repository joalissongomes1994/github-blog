import { ContainerCard } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'
import { IssueDataProps } from '../../../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { dateFormatter } from '../../../../lib/formatter'

interface CardProps {
  dataCard: IssueDataProps
}

export function Card({ dataCard }: CardProps) {
  const navigate = useNavigate()

  const published = dataCard.created_at && dateFormatter(dataCard.created_at)

  function handleNavigate() {
    navigate(`post/${dataCard.number}`)
  }

  return (
    <ContainerCard>
      <button type="button" onClick={handleNavigate}>
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
