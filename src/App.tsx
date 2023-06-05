import './styles/index.css';
import InfoForm from './components/InfoForm';
import { useState, ChangeEvent } from 'react';

export interface FoodInfo {
	calories: string;
	protein: string;
	carbs: string;
	fat: string;
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
			<header className="header">
				<h1>SmartFooder</h1>
			</header>
			<main className="main">
				<InfoForm
					userFoodInfo={userFoodInfo}
					handleCaloriesInputChange={handleCaloriesInputChange}
					handleProteinInputChange={handleProteinInputChange}
					handleCarbsInputChange={handleCarbsInputChange}
					handleFatInputChange={handleFatInputChange}
				/>
			</main>
			<footer className="footer">
				<p>Created by Sean Kempt</p>
			</footer>
		</div>
	);
};

export default App;
