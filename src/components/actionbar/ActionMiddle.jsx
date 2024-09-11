import { Ticket } from "@assets/icons/Icon.jsx"
import "./actionbar.css"
export default function ActionMiddle(){
    return (
        <div className="action-middle">
            <div className="options-component">
                <p>Following</p>
                <p>Discover</p>
                <p>Popular with friends</p>
                <a className="options-link">More feeds</a>
            </div>
            <div className="terms-component">
                <p className="terms-text">Send feedback</p>
                <p className="terms-text">Privacy</p>
                <p className="terms-text">Terms</p>
                <p className="terms-text">Help</p>
            </div>
            <div className="invite-component">
                <span className="invite-container">
                    <Ticket className="invite-icon" />
                    <p className="invite-text">Invite code available</p>
                </span>
            </div>
        </div>
    )
}