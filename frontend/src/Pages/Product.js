import {useEffect, useState} from 'react';
//components
import ReviewDetails from '../components/ReviewDetails'

const Home = () => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            const responseReviews = await fetch('https://localhost:4000/api/reviews/');
            const json = await response.json();

            if(response.ok) {
                setReviews(json);
            }
        } 
        fetchReviews()
    }, [])
    return (
        <div className="product">
            <h1>Item's Name</h1>
            <img src="#" alt="Image" />
            <p>Price  20$
                <img src="#" alt="flavor" />
            </p>
            <p>Description</p>
            <p>Featuring Fresh Strawberries in a moist Vanilla Based with Strawberry-Infused Frosting.</p>
            <h3>Reviews</h3>
            <div className="reviews">
                {reviews && reviews.map((review) => (
                    <ReviewDetails key={review._id} review={review}/>
                    ))}
            </div> 
            <h3>Add a Review</h3>
            
        </div>
    )
}
export default Home;