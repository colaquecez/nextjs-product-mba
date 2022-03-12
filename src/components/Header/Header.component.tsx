import { Link } from '@/components'
import useAppSelector from '@/hooks/useSelector'
import { logoutAction } from '@/redux/Auth/Auth.slice'
import { useDispatch } from 'react-redux'
import * as S from './Header.styles'

const Header = () => {
  const { name } = useAppSelector(state => state.auth)
  const dispatch = useDispatch()
  const logoutHandle = () => {
    dispatch(logoutAction())
  }

  return (
    <S.Container>
      <S.SubContainer>
        <Link href="/" label="Home" />
        <Link href="/" label="Favoritos" />
      </S.SubContainer>

      <S.SubContainer>
        <p className="name">{name}</p>
        <button type="button" onClick={logoutHandle}>
          Sair
        </button>
      </S.SubContainer>
    </S.Container>
  )
}

export default Header
