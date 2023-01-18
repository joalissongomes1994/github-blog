import { UserDataProps } from '../../../../hooks/useFetch'
import { Content, ProfileContainer } from './styles'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { FaBuilding } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'

interface ProfileProps {
  data: UserDataProps
}

export function Profile({ data }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={data.avatar_url} alt="" />

      <Content>
        <header>
          <h4>{data.name}</h4>

          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <span>
              github <BsBoxArrowUpRight />
            </span>
          </a>
        </header>

        <span>{data.bio}</span>

        <footer>
          <span>
            <BsGithub /> <span>{data.login}</span>
          </span>

          <span>
            <FaBuilding /> <span>{data.company}</span>
          </span>

          <span>
            <HiUsers />
            <span>
              {data.followers > 0
                ? `${data.followers} seguidores`
                : `${data.followers} seguidor`}
            </span>
          </span>
        </footer>
      </Content>
    </ProfileContainer>
  )
}
