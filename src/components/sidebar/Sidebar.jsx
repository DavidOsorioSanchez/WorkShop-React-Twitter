import "./sidebar.css"
import SidebarHeader from "@components/sidebar/SidebarHeader.jsx"
import SidebarMiddle from "@components/sidebar/SidebarMiddle.jsx"
import SidebarFooter from "@components/sidebar/SidebarFooter.jsx"

export default function Sidebar() {
    return (
        // componente para mostrar el sidebar
        <aside>
            <div className="sub-sidebar">
                <SidebarHeader />
                <SidebarMiddle />
                <SidebarFooter />
            </div>
        </aside>
    )
}