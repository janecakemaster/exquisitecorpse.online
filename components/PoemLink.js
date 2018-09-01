import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/poem?id=${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)
export default PostLink
