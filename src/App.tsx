import { SocketProvider } from './context/SocketContext'
import HomePage from './pages/HomePage';
import "./app.scss"

function App() {

  return (
		<SocketProvider>
			<HomePage />
		</SocketProvider>
  )
}

export default App
