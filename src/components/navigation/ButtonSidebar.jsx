import "@components/sidebar/sidebar.css"
import "./navigation.css"

export default function ButtonSidebar({ icon, text}) {
    return (
        <button className="button-sidebar">
            {icon}
            <span className="button-sidebar-text">{text}</span>
        </button>
    )
}