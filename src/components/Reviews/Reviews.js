export const Reviews = ({ reviews }) => {
  return (
    <div>
      {' '}
      {reviews.map((item, index) => (
        <div key={index}>
          <p>Reviewer Name: {item.reviewer_name}</p>
          <p>Reviewer Rating: {item.reviewer_rating}</p>
          <p>Comment: {item.comment}</p>
        </div>
      ))}
    </div>
  );
};
