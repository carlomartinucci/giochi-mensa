import { Provider } from "react-redux"
import { useDocument } from "@nandorojo/swr-firestore"

import Cascata from "./Cascata/Cascata"
import store from "./Cascata/store"

const useCascataGame = id => {
  const { data, error } = useDocument(`cascata/${id}`)

  return {
    cascata: data,
    isLoading: !error && !data,
    isError: error,
  }
}

const CascataShow = ({ cascataId }) => {
  const { cascata, isLoading, isError } = useCascataGame(cascataId)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error :(</div>

  return (
    <Provider store={store}>
      <Cascata cascata={cascata} key={cascataId} />
    </Provider>
  )
}

export default CascataShow
