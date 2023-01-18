import { useEffect } from 'react'
import { Input } from '../../components/Input'
import { useFetch } from '../../hooks/useFetch'
import { Card } from './components/Card'
import { Profile } from './components/Profile'

import { IssuesGrid, WrapperInput } from './styles'

export function Blog() {
  const { getUseData, getIssues, userData, issueData } = useFetch()
  const totalPublications = issueData.total_count

  useEffect(() => {
    getUseData()
  }, [getUseData])

  useEffect(() => {
    getIssues()
  }, [getIssues])

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
        <Input placeholder="Buscar conteúdo" />
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
