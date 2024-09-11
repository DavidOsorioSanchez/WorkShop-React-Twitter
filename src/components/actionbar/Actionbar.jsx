import "./actionbar.css"
import Actionheader from "./Actionheader"
import ActionMiddle from "./ActionMiddle"
export default function Actionbar(){
    return (
        // componente para mostrar la barra de acciones
        <div className="actionbar">
            <div className="actionbar-content">
                <Actionheader />
                <ActionMiddle />
            </div>
        </div>
    )
}