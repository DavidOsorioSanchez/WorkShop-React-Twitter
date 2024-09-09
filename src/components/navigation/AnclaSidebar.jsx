import "./navigation.css"
import "@components/sidebar/sidebar.css"

export default function AnclaSidebar({url, icon, text}) {
    return (
        <a href={`${url}`} target="_blank" className="look-navigations-sidebar">
            <div className="navigations-sidebar">
                {icon}
                <span className="navigations-sidebar-text">{text}</span>
            </div>
        </a>
    );
}