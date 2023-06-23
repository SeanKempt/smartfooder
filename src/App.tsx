import './styles/index.css';
import InfoForm from './components/InfoForm';
import CardContainer from './components/CardContainer';
import { useState, ChangeEvent } from 'react';
import { foodItemList } from './helpers/foodItemList';

export interface FoodInfo {
	calories: string;
	protein: string;
	carbs: string;
	fat: string;
}

export interface FoodItem {
	name: string;
	calories: number;
	carbs: number;
	protein: number;
	fat: number;
}

export interface Handlers {
	handleCaloriesInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleProteinInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleCarbsInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleFatInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const App = () => {
	const [userFoodInfo, setUserFoodInfo] = useState<FoodInfo>({
		calories: '',
		protein: '',
		carbs: '',
		fat: '',
	});

	const [filteredFoodItems, setFilteredFoodItems] = useState<FoodItem[]>([]);

	// This filters the array of objects to show only fooditems that are less than or equal to the calories. Should return an Array of objects.
	// apparantly setState always returns nothing.
	const filterFoodItemsByCalorie = (calories: string): void => {
		const calNum = Number(calories);
		setFilteredFoodItems(
			foodItemList.filter((item) => item.calories <= calNum)
		);
	};

	const handleCaloriesInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserFoodInfo({
			...userFoodInfo,
			calories: e.target.value,
		});
	};

	const handleProteinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserFoodInfo({
			...userFoodInfo,
			protein: e.target.value,
		});
	};

	const handleCarbsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserFoodInfo({
			...userFoodInfo,
			carbs: e.target.value,
		});
	};

	const handleFatInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserFoodInfo({
			...userFoodInfo,
			fat: e.target.value,
		});
	};

	return (
		<div className="pagewrapper">
			<header className="header flex items-center">
				<h1 className="text-3xl font-bold underline">SmartFooder</h1>
			</header>
			<main className="main">
				<InfoForm
					userFoodInfo={userFoodInfo}
					filterFoodItemsByCalorie={filterFoodItemsByCalorie}
					handleCaloriesInputChange={handleCaloriesInputChange}
					handleProteinInputChange={handleProteinInputChange}
					handleCarbsInputChange={handleCarbsInputChange}
					handleFatInputChange={handleFatInputChange}
				/>
				<CardContainer filteredFoodItemList={filteredFoodItems} />
			</main>
			<footer className="footer flex justify-center items-center">
				<p>Created by Sean Kempt</p>
			</footer>
		</div>
	);
};

export default App;
