import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import PoemLink from '../components/PoemLink'

const Index = (props) => (
  <Layout>
    <h1>exquisite corpse</h1>
    <ul>
      {props.poems.map(({ poemId }, i) =>
        <PoemLink key={i} id={poemId} />
      )}
    </ul>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/poems')
  const poems = await res.json()

  console.log(`${poems.length} poems fetched`)

  return {
    poems
  }
}

export default Index
