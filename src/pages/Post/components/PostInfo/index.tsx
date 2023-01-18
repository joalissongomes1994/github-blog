import { IssueDetailsProps } from '../../../../hooks/useFetch'
import { Content, PostInfoContainer } from './styles'
import { BsBoxArrowUpRight, BsGithub, BsChevronLeft } from 'react-icons/bs'
import { FaCalendarDay, FaComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import BR from 'date-fns/locale/pt-BR'

interface PostInfoProps {
  data: IssueDetailsProps
}

export function PostInfo({ data }: PostInfoProps) {
  const navigate = useNavigate()

  const published =
    data.created_at &&
    formatDistanceToNow(new Date(data.created_at), {
      addSuffix: true,
      locale: BR,
    })

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <Content>
        <header>
          <button type="button" onClick={handleNavigate}>
            <BsChevronLeft /> <span>Voltar</span>
          </button>

          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <span>
              ver no github <BsBoxArrowUpRight />
            </span>
          </a>
        </header>

        <h2>{data.title}</h2>

        <footer>
          <span>
            <BsGithub /> <span>{data.user?.login}</span>
          </span>

          <span>
            <FaCalendarDay /> <span>{published}</span>
          </span>

          <span>
            <FaComment />
            <span>
              {data.comments > 0
                ? `${data.comments} comentários`
                : `nenhum comentário`}
            </span>
          </span>
        </footer>
      </Content>
    </PostInfoContainer>
  )
}
