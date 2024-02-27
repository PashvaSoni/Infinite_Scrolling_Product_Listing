import React, { useState, useEffect, useRef } from "react";
import Loading from "./loading.gif";
import Stories from "./Components/Stories";
import FeedComp from "./Components/FeedComp";
import { static_data } from "./Components/static_data";
import axios from 'axios';

function App() {
    const stories_data = static_data.stories;
    const [photos, setPhotos] = useState([
        {
            "productType": "rings",
            "productMetalType": "gold",
            "productExtraCharges": 98,
            "productMediaURLs": [
                {
                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705847031630-gold_ring_with_diamond_",
                    "mediaType": "image"
                }
            ],
            "productDescription": "this is best ring",
            "productCreatedAt": "2024-01-21T14:23:53.465Z",
            "productLabour": 67,
            "productWeight": 45,
            "productID": "aea20ff4-9b97-4043-bc62-69bfd44ffeb5",
            "productName": "gold ring with diamond"
        },
        {
            "productType": "bengals",
            "productMetalType": "gold",
            "productExtraCharges": 100,
            "productMediaURLs": [
                {
                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705849981171-Diamond_Bengals",
                    "mediaType": "image"
                }
            ],
            "productDescription": "Introducing \"Royal Splendor Diamond Bengals\" — an embodiment of luxury in every detail. Crafted from pure gold, weighing 10 grams, and meticulously designed with 1000 units of expert labor. Elevate your elegance with these bangles, a fusion of sophistication and regal charm. Unveil the allure of Royal Splendor.",
            "productCreatedAt": "2024-01-21T15:12:55.449Z",
            "productLabour": 1000,
            "productWeight": 10,
            "productID": "e714efc2-c3e4-4a4d-8366-c79308be1d89",
            "productName": "Diamond Bengals"
        },
        {
            "productType": "tops",
            "productMetalType": "platinum",
            "productExtraCharges": 4,
            "productMediaURLs": [
                {
                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705845777069-Ring_Tesing",
                    "mediaType": "image"
                },
                {
                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705845777077-Ring_Tesing",
                    "mediaType": "image"
                }
            ],
            "productDescription": "Ring Description",
            "productCreatedAt": "2024-01-21T14:02:58.545Z",
            "productLabour": 5,
            "productWeight": 10,
            "productID": "9f199927-b1ab-4019-b099-5f04cf4a9dba",
            "productName": "Ring Tesing"
        }
    ]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPhotos = async (pageNumber) => {
        // const Access_Key = "VaS3ud1C-0gdW1nw41FbBryaV_Q5obZ04o-3Vi2QC1E";
        // const Access_Key = "VaS3ud1C-0gdW1nw41FbBryaV_Q5obZ04o-3Vi2QC1E";
        // const res = await fetch(
        //     `https://907edw5pi0.execute-api.eu-north-1.amazonaws.com/PROD&page=${pageNumber}&limit=2`
        // );
        // const data = await res.json();
        // let data = await axios.get(process.env.REACT_APP_SERVER_URL, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
        let data = {
            data:{
                body:{
                    Items:[
                        {
                            "productType": "rings",
                            "productMetalType": "gold",
                            "productExtraCharges": 98,
                            "productMediaURLs": [
                                {
                                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705847031630-gold_ring_with_diamond_",
                                    "mediaType": "image"
                                }
                            ],
                            "productDescription": "this is best ring",
                            "productCreatedAt": "2024-01-21T14:23:53.465Z",
                            "productLabour": 67,
                            "productWeight": 45,
                            "productID": "aea20ff4-9b97-4043-bc62-69bfd44ffeb5",
                            "productName": "gold ring with diamond"
                        },
                        {
                            "productType": "bengals",
                            "productMetalType": "gold",
                            "productExtraCharges": 100,
                            "productMediaURLs": [
                                {
                                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705849981171-Diamond_Bengals",
                                    "mediaType": "image"
                                }
                            ],
                            "productDescription": "Introducing \"Royal Splendor Diamond Bengals\" — an embodiment of luxury in every detail. Crafted from pure gold, weighing 10 grams, and meticulously designed with 1000 units of expert labor. Elevate your elegance with these bangles, a fusion of sophistication and regal charm. Unveil the allure of Royal Splendor.",
                            "productCreatedAt": "2024-01-21T15:12:55.449Z",
                            "productLabour": 1000,
                            "productWeight": 10,
                            "productID": "e714efc2-c3e4-4a4d-8366-c79308be1d89",
                            "productName": "Diamond Bengals"
                        },
                        {
                            "productType": "tops",
                            "productMetalType": "platinum",
                            "productExtraCharges": 4,
                            "productMediaURLs": [
                                {
                                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705845777069-Ring_Tesing",
                                    "mediaType": "image"
                                },
                                {
                                    "mediaURL": "https://prodimagepost4.s3.ap-south-1.amazonaws.com/images/1705845777077-Ring_Tesing",
                                    "mediaType": "image"
                                }
                            ],
                            "productDescription": "Ring Description",
                            "productCreatedAt": "2024-01-21T14:02:58.545Z",
                            "productLabour": 5,
                            "productWeight": 10,
                            "productID": "9f199927-b1ab-4019-b099-5f04cf4a9dba",
                            "productName": "Ring Tesing"
                        }
                    ]
                }
            }
        }
        setPhotos((p) => [...p, ...data.data.body.Items]);
        setLoading(true);
    };

    useEffect(() => {
        fetchPhotos(pageNumber);
    }, [pageNumber]);

    useEffect(async () => {
        await fetchPhotos(pageNumber);
    }, []);
    const loadMore = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };

    const pageEnd = useRef();
    let num = 1;

    useEffect(() => {
        if (loading) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        num++;
                        loadMore();
                        if (num >= 10) {
                            observer.unobserve(pageEnd.current);
                        }
                    }
                },
                { threshold: 1 }
            );

            observer.observe(pageEnd.current);
        }
    }, [loading, num]);
    console.log(photos)
    return (
        <div className="App">
            <h1>Sungold Jwellery</h1>
            <Stories stories={stories_data} />
            <FeedComp data={photos} />
            <div className="loading">
                <img src={Loading} alt="" />
            </div>

            <h3>{photos.length}</h3>

            <button onClick={loadMore} ref={pageEnd}>
                Load More
            </button>
        </div>
    );
}

export default App;
