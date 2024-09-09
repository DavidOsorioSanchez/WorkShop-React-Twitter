import { ArrowRight, Message, Reply, Heart, Ellipsis} from "@assets/icons/Icon";
import "./main.css"

export default function CardMain({
    name, 
    userName, 
    time, 
    getPronoms, 
    pronoms, 
    replyPerson, 
    picture, 
    reply, 
    description, 
    likes, 
    comments, 
    numberReplay,
    imageDescription}) {
    return (
        <article className="card">
            <div className="picture-section">
                <img src={picture} alt="myPicture" className="picture-image" />
            </div>
            <div className="card-content">
                <div className="card-content-header">
                    <div className="card-person-info">
                        <h1 className="card-tittle">{name}</h1>
                        {getPronoms ?
                            <p className="card-tittle">
                                {pronoms}
                            </p>
                            : null
                        }
                        <p className="atsign-text">@{userName}</p>
                        <p>- {time} ago.</p>
                    </div>
                    {reply && replyPerson != null ?
                        <div className="card-reply">
                            <ArrowRight className="card-reply-icon" />
                            <p>reply to {replyPerson}</p>
                        </div>
                        : null
                    }
                </div>
                <p className="card-description">
                    {description}
                </p>
                {imageDescription != null ?
                    <div className="image-section">
                        <img src={imageDescription} alt="myPicture" className="description-image" />
                    </div>
                    : null
                }
                <div className="card-footer">
                    <span className="container-icons">
                        <Message className="card-footer-icon" />
                        {comments|| comments == null ? <p>{comments}</p> : null}
                    </span>
                    <span className="container-icons">
                        <Heart className="card-footer-icon" />
                        {likes|| likes == null ? <p>{likes}</p> : null}
                    </span>
                    <span className="container-icons reply-icon">
                        <Reply className="card-footer-icon" />
                        {numberReplay || numberReplay == null ? <p>{numberReplay}</p> : null }
                    </span>
                    <span className="container-icons">
                        <Ellipsis className="card-footer-icon" />
                    </span>
                </div>
            </div>
        </article>
    );
}
