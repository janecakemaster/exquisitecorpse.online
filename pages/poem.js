import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'

const Poem = withRouter(({ poem }) => (
  <Layout>
    <h1>{poem.poemId}</h1>
    {poem.lines.map((line, i) => <p key={i}>{line}</p>)}
  </Layout>
))

Poem.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/poems/${query.id}`)
  const poem = await res.json()

  console.log(`Poem:${poem.poemId} fetched`)

  return {
    poem
  }
}

export default Poem
