import Sidebar from "@components/sidebar/Sidebar.jsx"
import Main from "@components/main/main"
import Actionbar from "@components/actionbar/Actionbar.jsx"
import Bloqueador from "@components/other/Bloqueador.jsx"
export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main/>
      <Actionbar/>
      <Bloqueador />
    </div>
  )
}
