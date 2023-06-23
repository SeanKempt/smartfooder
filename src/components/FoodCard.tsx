import { FoodItem } from '../App';
import { ReactElement } from 'react';
interface FoodCardProps {
	foodItem: FoodItem;
}
const FoodCard = ({ foodItem }: FoodCardProps): ReactElement => {
	return (
		<div className="foodcard bg-red-700 min-w-60 col-start-1 col-end-2 w-56">
			<h3 className="text-center">{foodItem.name}</h3>
			<div>
				<p>Calories: {foodItem.calories}</p>
				<p>Protein: {foodItem.protein}</p>
				<p>Fat: {foodItem.fat}</p>
				<p>Carbs: {foodItem.carbs}</p>
			</div>
		</div>
	);
};

export default FoodCard;
