import { HeaderContainer } from './styles'
import logoGithubBlog from '../../assets/logo-github-blog.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGithubBlog} alt="" />
    </HeaderContainer>
  )
}
