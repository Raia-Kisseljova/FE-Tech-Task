import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/index.jsx'
import data from './data.json'

ReactDOM.createRoot(document.getElementById('root')).render(<App data={data} />)
