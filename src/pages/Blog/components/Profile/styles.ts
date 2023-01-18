import styled from 'styled-components'

export const ProfileContainer = styled.div`
  min-height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;

  padding: 2rem;
  margin-top: calc(7.75rem - 13.25rem);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 48px;
      height: 48px;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  padding-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;

    h4 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.3;
    }

    > a {
      font-weight: 700;
      font-size: 0.75rem;

      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      span {
        display: flex;
        align-items: center;
        transition: border-bottom 0.2s;
        border-bottom: 1px solid transparent;

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
        }
      }
    }

    svg {
      stroke-width: 1;
      margin-left: 0.5rem;
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;

    > span {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    > span svg {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }

  @media (max-width: 768px) {
    padding: 0;

    header {
      padding: 0.5rem 0;
    }

    footer {
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }
  }
`
