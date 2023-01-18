import styled from 'styled-components'

export const WrapperPost = styled.div`
  .markdown-body {
    padding: 2.5rem 2rem 2rem;
    background-color: transparent;
    color: ${(props) => props.theme['base-text']};

    pre {
      background-color: ${(props) => props.theme['base-post']};
    }
  }
`
