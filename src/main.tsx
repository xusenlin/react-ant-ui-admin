import App from './App.tsx'
import {store} from './store';
import '@/assets/style/index.scss'
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <Provider store={store}>
      <App/>
    </Provider>
)
