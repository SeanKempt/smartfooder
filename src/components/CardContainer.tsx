import { FoodItem } from '../App';
import FoodCard from './FoodCard';
import uniqid from 'uniqid';
interface CardContainerProps {
	filteredFoodItemList: FoodItem[];
}
const CardContainer = ({ filteredFoodItemList }: CardContainerProps) => {
	return (
		<div className="card-container bg-slate-500 w-9/12 justify-self-center grid grid-cols-3 grid-rows-2 gap-5">
			{filteredFoodItemList.map((item) => {
				return <FoodCard key={uniqid()} foodItem={item} />;
			})}
		</div>
	);
};

export default CardContainer;
