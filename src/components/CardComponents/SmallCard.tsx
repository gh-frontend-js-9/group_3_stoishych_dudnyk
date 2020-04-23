import React from 'react';
import '../../assets/styles/scss/Cards/smallCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Post } from '../../interfaces/docs';
import { setCurrentPost } from '../../actions/currentPost';

interface IProps {
    post: Post;
    isPhoto: boolean;
}

const SmallCard: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <Link
      to="/post"
      className={`sm-card ${props.isPhoto ? 'sm-card_col_2' : ''}`}
      onClick={() => dispatch(setCurrentPost(props.post._id))}
    >
      { props.isPhoto
        ? <img src={props.post.featuredImage || `https://picsum.photos/80?${new Date().getMilliseconds()}`} alt={props.post.title} className="sm-card__image" />
        : null}
      <div>
        <p className="sm-card__tags">{props.post.tags![0] || 'Other stuff'}</p>
        <p className="sm-card__title">{props.post.title}</p>
      </div>
    </Link>
  );
};

export default SmallCard;
