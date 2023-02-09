import { FC } from 'react'
import reactlogo from './assets/images/react.svg'

const App: FC = () => {
  return (
    <div>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>React TS WEBPACK</h1>
      <h2>Credit {process.env.HOST}</h2>
    </div>
  )
}

export default App
