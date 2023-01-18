import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: url('/src/assets/cover-header.png') no-repeat center;
  background-size: cover;

  height: 18.5rem;

  img {
    width: 148px;
    height: 98px;
    margin-top: 4rem;
  }

  @media (max-width: 720px) {
    height: 18.5rem;

    img {
      width: 128px;
      height: 78px;
      margin-top: 4rem;
    }
  }
`
