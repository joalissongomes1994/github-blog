import { createRef, FormEvent, useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { useFetch } from '../../hooks/useFetch'
import { Card } from './components/Card'
import { Profile } from './components/Profile'

import { IssuesGrid, WrapperInput } from './styles'

export function Blog() {
  const { getUseData, getIssues, userData, issueData } = useFetch()
  const totalPublications = issueData.total_count

  const [issueName, setIssueName] = useState<string>('')
  const issueRef = createRef<HTMLInputElement>()

  function handleIssueSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    issueRef.current?.value && setIssueName(issueRef.current?.value)
    !issueRef.current?.value && setIssueName('')
  }

  useEffect(() => {
    getUseData()
  }, [getUseData])

  useEffect(() => {
    getIssues(issueName)
  }, [getIssues, issueName])

  return (
    <div>
      <Profile data={userData} />

      <WrapperInput>
        <div>
          <span>Publicações</span>
          <span>
            {totalPublications > 0
              ? `${totalPublications} publicações`
              : `nenhuma publicação`}
          </span>
        </div>

        <form action="" onSubmit={handleIssueSearchSubmit}>
          <Input
            placeholder="Buscar conteúdo"
            name="test"
            issueRef={issueRef}
          />
        </form>
      </WrapperInput>

      <IssuesGrid>
        {issueData.items?.length > 0 &&
          issueData.items.map((item, index) => (
            <Card key={item.body} dataCard={item} />
          ))}
      </IssuesGrid>
    </div>
  )
}
