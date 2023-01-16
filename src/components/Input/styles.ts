import styled from 'styled-components'

export const InputCustom = styled.input`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 8px;

  height: 3.125rem;

  /* Base/Input */

  background: ${(props) => props.theme['base-input']};
  /* Base/Border */

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
