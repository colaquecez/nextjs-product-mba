import Link from 'next/link'
import * as S from './Link.styles'

interface ILinkComponent {
  href: string
  label: string
}

const LinkComponent = ({ href, label }: ILinkComponent) => {
  return (
    <S.Container>
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </S.Container>
  )
}

export default LinkComponent
