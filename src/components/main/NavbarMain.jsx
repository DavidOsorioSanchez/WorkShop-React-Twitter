import { Corazon, Plus, Ellipsis} from "@assets/icons/Icon.jsx"
import "./main.css"
import GenericButton from "@components/navigation/GenericButton.jsx"

export default function NavbarMain() {
    return (
        <nav>
            <p className="tittle-nav">
                Blacksky
            </p>
            <div className="container-nav">
                <Corazon className="icon-nav icon-heart" />
                <GenericButton
                    icon={<Plus className="icon-nav" />}
                    text="Notificaciones"
                    url="#"
                    className="button-main"
                />
                <Ellipsis className="icon-nav" />
            </div>
        </nav>
    )
}