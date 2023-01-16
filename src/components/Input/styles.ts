import styled from 'styled-components'

export const InputCustom = styled.input`
  display: flex;
  width: 100%;
  height: 3.125rem;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 8px;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
