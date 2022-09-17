import PropTypes from 'prop-types';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import styles from './ReviewsList.module.css';
const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul className={styles.reviews}>
        {reviews &&
          (reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id} id={id} author={author} content={content} />
            ))
          ) : (
            <p className={styles.sorry}>
              There are no reviews available.
            </p>
          ))}
      </ul>
    </>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default ReviewsList;
