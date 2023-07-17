import ListContact from '../../containers/Contact'
import Sidebar from '../../containers/sidebar'

const Home = () => (
  <>
    <Sidebar mostrarFiltros={true} />
    <ListContact />
  </>
)

export default Home
