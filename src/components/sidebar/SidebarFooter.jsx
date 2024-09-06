import ButtonSidebar from "@components/navigation/ButtonSidebar.jsx"
import "./sidebar.css"
import { Pencil } from "@assets/icons/Icon.jsx"

export default function SidebarFooter() {
    return (
        <div className="sidebar-footer">
            <ButtonSidebar
                icon={<Pencil className="button-icons" />}
                text="New Post"
            />
        </div>
    )
}