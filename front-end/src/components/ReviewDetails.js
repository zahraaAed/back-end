const ReviewDetails = ({ review }) => {
    return(
        <div className="review-details">
            <h4>
                {review.name}
            </h4>
            <p>
                <strong>{review.reviews}</strong>
            </p>
        </div>
    )
}
export default ReviewDetails;