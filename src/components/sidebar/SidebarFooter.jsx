import GenericButton from "@components/navigation/GenericButton.jsx"
import "./sidebar.css"
import { Pencil } from "@assets/icons/Icon.jsx"
import "@components/navigation/navigation.css"

export default function SidebarFooter() {
    return (
        <div className="sidebar-footer">
            <GenericButton
                icon={<Pencil className="button-icons" />}
                text="New Post"
                url="#"
                className="button-sidebar"
            />
        </div>
    )
}