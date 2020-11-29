import { Provider } from "react-redux"

import Cascata from "./Cascata/Cascata"
import store from "./Cascata/store"

const CascataShow = ({ cascataId }) => (
  <Provider store={store}>
    <Cascata id={cascataId} key={cascataId} />
  </Provider>
)

export default CascataShow
