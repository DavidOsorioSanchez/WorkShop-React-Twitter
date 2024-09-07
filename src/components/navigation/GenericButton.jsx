import "./navigation.css"

export default function ButtonSidebar({ icon, text, className, textStyle}) {
    return (
        <a className={`generic-button ${className}`}>
            {icon}
            <span className={`button-text ${textStyle}`}>{text}</span>
        </a>
    )
}