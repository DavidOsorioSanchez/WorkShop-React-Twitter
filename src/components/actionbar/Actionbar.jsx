import "./actionbar.css"
import Actionheader from "@components/actionbar/Actionheader.jsx"
export default function Actionbar(){
    return (
        // componente para mostrar la barra de acciones
        <div className="actionbar">
            <div className="actionbar-content">
                <Actionheader />
            </div>
        </div>
    )
}