import React from "react";
import ProfilePic from "./profile_pic";
function capitalize(str) {
    // Check if the string is null, undefined, or empty
    if (!str || str.trim() === '') {
        return ''; // Return an empty string for null, undefined, or empty strings
    }
    // Split the string into an array of words
    const words = str.split(' ');
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });    // Join the capitalized words back into a single string
    const capitalizedString = capitalizedWords.join(' ');
    return capitalizedString;
}
const FeedComp = (props) => {
    console.log("tesing ", props)
    const mainData = props.data;
    return (
        <div className='feed-body'>
            <div className='feed-container'>
                {mainData.map((item, index) => (
                    <div className="feed-post">
                        <div className="feed-post-header">
                            <ProfilePic src={"https://picsum.photos/id/260/200/200"} size={63} username={"Bengals"}></ProfilePic>
                            <h2>{capitalize(item.productName)}</h2>
                        </div>
                        <div className="feed-post-photos">
                            <span className="arrows" style={{}}>
                                <img src="images/swipe_left.svg" width={"20px"}></img>
                            </span>
                            {item.productMediaURLs.map((media, index) => (
                                <div key={index} className="photos">
                                    {media.mediaType === 'image' ? (
                                        <img src={media.mediaURL} alt={`Image ${index}`} />
                                    ) : (
                                        <video autoPlay loop controls>
                                            <source src={media.mediaURL} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            ))}
                            <span className="arrows">
                                <img src="images/swipe_right.svg" width={"20px"}></img>
                            </span>
                        </div>

                        <div className="feed-post-description">
                            <div>
                                <button style={{backgroundColor:'transparent',border:'3px solid white',padding:'6px',margin:'6px',cursor:'pointer',color:'white',fontSize:'21px'}}>View Details</button>
                            </div>
                            <div style={{display:'flex',gap:'1rem'}}>
                                <span>
                                    <img src="images/like_icon.svg" width={"35px"}></img>
                                </span>
                                <span>
                                    <img src="images/share_icon.svg" width={"35px"}></img>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeedComp;
