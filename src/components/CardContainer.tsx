import FoodCard from './FoodCard';
const CardContainer = () => {
	return (
		<div className="card-container bg-slate-500 w-9/12 justify-self-center grid grid-cols-3 grid-rows-2 gap-5">
			<FoodCard />
		</div>
	);
};

export default CardContainer;
