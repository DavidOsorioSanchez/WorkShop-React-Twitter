import "./sidebar.css"
import { User, Home, Search, Hashtag, Bell, CogTooth, Hand, UserRing } from "@assets/icons/Icon.jsx"
import AnclaSidebar from "@components/navigation/AnclaSidebar.jsx"
export default function SidebarMiddle() {
    return (
        <div className="sidebar-middle">
                <AnclaSidebar 
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Home" 
                    icon={<Home className="navigation-icons" />} 
                />
                <AnclaSidebar
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Search" 
                    icon={<Search className="navigation-icons" />} 
                />
                <AnclaSidebar 
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Feeds" 
                    icon={<Hashtag className="navigation-icons" />} 
                />
                <AnclaSidebar 
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Notifications" 
                    icon={<Bell className="navigation-icons" />} 
                />
                <AnclaSidebar 
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Moderation" 
                    icon={<Hand className="navigation-icons" />} 
                />
                <AnclaSidebar 
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Profile" 
                    icon={<UserRing className="navigation-icons" />} 
                />
                <AnclaSidebar 
                    url="https://github.com/DavidOsorioSanchez/WorkShop-React-Twitter/tree/main" 
                    text="Settings" 
                    icon={<CogTooth className="navigation-icons" />} 
                />
            </div>
    )
}