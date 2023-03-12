import { API, graphqlOperation } from "aws-amplify"
import { ListZellerCustomers } from "../graphql/queries"

const getZellerCustomers = () => {
  return API.graphql(graphqlOperation(ListZellerCustomers))
}

export {
  getZellerCustomers
}