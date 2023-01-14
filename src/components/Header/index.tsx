import { HeaderContainer } from './styled'
import LogoGithubBlog from '../../assets/logo-github-blog.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoGithubBlog} alt="" />
    </HeaderContainer>
  )
}
