import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styled'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}
