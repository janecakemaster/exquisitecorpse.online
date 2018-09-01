import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const HeaderLink = (props) => (
  <Link href={props.href}>
    <a style={linkStyle}>{props.children}</a>
  </Link>
)

export default HeaderLink
