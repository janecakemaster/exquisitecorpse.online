const { Poem, Status } = require('./database')

function updateStatus (doc) {
  const { _id: currentId } = doc
  const updatedStatus = new Status({ currentId, poemIdCounter: 2 })

  updatedStatus.save((err, doc) => {
    if (err) return console.error(err)
    console.log('Initialized status', doc)
  })
}

const now = Date.now()
const firstPoem = new Poem({
  poemId: 1,
  lines: ['a single line'],
  maxLength: 1,
  finishedAt: now
})

firstPoem.save((err, savedPoem) => {
  if (err) return console.error(err)
  updateStatus(savedPoem)
})
