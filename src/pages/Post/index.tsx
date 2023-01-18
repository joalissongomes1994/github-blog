import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { PostInfo } from './components/PostInfo'
import { WrapperPost } from './styles'

import remarkGfm from 'remark-gfm'
import { Loading } from '../../components/Loading'

export function Post() {
  const { getIssue, issueDetails, isLoadingPage } = useFetch()
  const { issueNumber } = useParams()

  useEffect(() => {
    getIssue(issueNumber)
  }, [getIssue, issueNumber])

  if (isLoadingPage) {
    return <Loading />
  }

  return (
    <WrapperPost>
      <PostInfo data={issueDetails} />

      <div className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issueDetails.body}
        </ReactMarkdown>
      </div>
    </WrapperPost>
  )
}
