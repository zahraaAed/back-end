import {useEffect, useState} from 'react';
//components
import ReviewDetails from '../components/ReviewDetails'

const Home = () => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            const responseReviews = await fetch('/api/reviews/');
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