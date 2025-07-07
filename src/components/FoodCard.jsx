import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const FoodCard = ({ image, title, description, rating }) => {
  const renderStars = () => {
    const stars = [];
    const rounded = Math.floor(rating);
    const hasHalf = rating - rounded >= 0.5;

    for (let i = 0; i < rounded; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="star-half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`star-empty-${stars.length}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center space-x-1">
          {renderStars()}
          <span className="ml-2 text-sm text-gray-500">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
