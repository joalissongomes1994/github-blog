import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  min-height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;

  padding: 2rem;
  margin-top: calc(7.75rem - 13.25rem);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;

    a,
    button {
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;

      border: 0;
      padding: 0;

      background: transparent;
      color: ${(props) => props.theme.blue};
      opacity: 1;

      cursor: pointer;

      svg {
        stroke-width: 1;
      }

      &:hover {
        opacity: 0.9;
        transition: opacity 0.2s;
      }
    }

    > a {
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

      svg {
        stroke-width: 1;
        margin-left: 0.5rem;
      }
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
