import React, { useState } from "react";
import ProfilePic from "./profile_pic";
import { Modal, Badge } from 'antd'

function round(n) {
    return n + (10 - n % 10);
}
function calc(gram, rate, labour, extra, discount) {
    gram = parseFloat(gram);
    labour = parseFloat(labour);
    rate = parseFloat(rate);
    extra = parseFloat(extra);
    discount=parseFloat(discount);
    let amount = ((gram * (rate + labour)) + extra);
    amount = round(amount + amount * 0.03);
    amount = amount-((discount/100)*amount);
    return round(amount);
}

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
// function GetDiscountFromProductType(productType="",discountObj)
// {
//     let mydiscount = discountObj.productTypeDiscounts.filter((item)=>{return item.productType.toLowerCase()===productType.toLowerCase()});
//     console.log(mydiscount)
//    return mydiscount.length>0?mydiscount[0].discount:discountObj.overallDiscount
// }
const FeedComp = (props) => {
    console.log("tesing ", props)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    let masterData = props.masterData;
    let changingMasterData = props.changingMasterData;

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const mainData = props.data;
    return (
        <div className='feed-body'>
            <div className='feed-container'>
                {mainData.map((item, index) => (
                    <Badge.Ribbon color="red" style={{display:(changingMasterData?.discounts?.productTypeDiscounts[item.productType] || changingMasterData.discounts.overallDiscount)?"block":"none"}} text={`Discount ${changingMasterData?.discounts?.productTypeDiscounts[item.productType] || changingMasterData.discounts.overallDiscount} !`}>
                        <div className="feed-post" >
                            <div className="feed-post-header">
                                <ProfilePic src={masterData.productTypeImages[item.productType]}  size={63} username={"Bengals"}></ProfilePic>
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
                                    <button onClick={() => { setModalData({ ...item }); showModal(); }} style={{ backgroundColor: 'transparent', border: '3px solid white', padding: '6px', margin: '6px', cursor: 'pointer', color: 'white', fontSize: '21px' }}>View Details</button>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <span>
                                        <img src="images/like_icon.svg" width={"35px"}></img>
                                    </span>
                                    <span>
                                        <img src="images/share_icon.svg" width={"35px"}></img>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Badge.Ribbon>
                ))}
            </div>
            <Modal title={capitalize(modalData.productName) || 'Best Jewellery'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{modalData.productDescription || "Exquisite and timeless, our jewelry collection embodies elegance and sophistication. Crafted with precision and attention to detail, each piece showcases a harmonious blend of luxury and style, designed to adorn and accentuate the beauty of those who wear them. From classic to contemporary designs, our jewelry reflects the essence of grace, offering a touch of glamour to every occasion."}</p>
                <h3>Product Specifications</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product Type</th>
                            <th>Product Metal Type</th>
                            <th>Metal Rate</th>
                            <th>Product Weight</th>
                            <th>Product Labour</th>
                            <th>Product Extra Charge</th>
                            <th>Discount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{capitalize(modalData.productType)}</td>
                            <td>{capitalize(modalData.productMetalType)}</td>
                            <td>{changingMasterData.rates[modalData.productMetalType]}</td>
                            <td>{modalData.productWeight}</td>
                            <td>{modalData.productLabour}</td>
                            <td>{modalData.productExtraCharges}</td>
                            <td>{changingMasterData?.discounts?.productTypeDiscounts[modalData.productType] || changingMasterData.discounts.overallDiscount}</td>
                            <td>{calc(modalData.productWeight, changingMasterData.rates[modalData.productMetalType], modalData.productLabour, modalData.productExtraCharges,(changingMasterData?.discounts?.productTypeDiscounts[modalData.productType] || changingMasterData.discounts.overallDiscount || 0))}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal>
        </div>
    );
}

export default FeedComp;
