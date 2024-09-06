import "./sidebar.css"
import { User, FlechaIzquierda } from "@assets/icons/Icon.jsx"

export default function SidebarHeader() {
    return (
        <div className="sidebar-header">
            <User className="sidebar-icons-user" />
            <FlechaIzquierda className="sidebar-icons-arrow" />
        </div>
    )
}