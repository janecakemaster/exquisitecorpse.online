const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { Poem } = require('./database')

const run = async () => {
  await app.prepare()
  const api = express()

  api.get('/poems', async (req, res, next) => {
    const poems = await Poem.find().exec().catch(next)
    res.json(poems)
  })

  api.get('/poems/:poemId', async (req, res, next) => {
    const poem = await Poem.findOne({ poemId: req.params.poemId }).exec().catch(next)
    res.json(poem)
  })

  api.get('*', handle) // SPA magic

  await new Promise((resolve, reject) => {
    api.listen(3000, (err) => err ? reject(err) : resolve)
  })
  console.log('> Ready on http://localhost:3000')
}

run().catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
