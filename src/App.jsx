import Sidebar from "@components/sidebar/Sidebar.jsx"
import Main from "@components/main/main"
import Actionbar from "@components/actionbar/Actionbar.jsx"
export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main/>
      <Actionbar/>
    </div>
  )
}
