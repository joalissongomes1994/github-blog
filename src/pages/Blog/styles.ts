import styled from 'styled-components'

export const IssuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  margin-bottom: 8rem;
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 4.5rem 0 3rem;

  > div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
