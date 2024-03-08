import Query from './query.js'
import Mutation from './mutation.js'

const resolvers = {
  ...Query,
  ...Mutation,
}

export default resolvers
