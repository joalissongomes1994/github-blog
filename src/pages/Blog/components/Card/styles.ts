import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 416px;
  width: 100%;
  height: 260px;

  button {
    padding: 2rem;
    background-color: ${(props) => props.theme['base-post']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 10px;
    border: 2px solid transparent;
    text-align: left;
    height: 100%;

    cursor: pointer;

    &:hover {
      border: 2px solid ${(props) => props.theme['base-label']};
      transition: border-color 0.2s;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.25rem;

    h2 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      white-space: nowrap;
      padding-top: calc(1.25rem - 0.875rem);
      padding-left: 0.5rem;
      text-align: left;
    }
  }

  .markdown-body {
    background-color: transparent;
    overflow: hidden;
    line-height: 1.6em;
    max-height: 5em;
  }
`
