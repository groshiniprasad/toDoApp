import './App.css'
import Todos from './components/TodoPage'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <Todos />
    </Layout>
  )
}

export default App
