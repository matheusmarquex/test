import Navbar from "./components/navbar"
import style from './app.module.scss';
function App() {

  return (
    <div className={style.container}>
      <div className={style.containerNav}>
      <Navbar />
      </div>
    </div>
  )
}

export default App
