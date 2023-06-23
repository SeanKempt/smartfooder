import { useState } from 'react';
import { FoodInfo, Handlers } from '../App';

interface InfoFormProps {
	userFoodInfo: FoodInfo;
	filterFoodItemsByCalorie: (calorie: string) => void;
	handleCaloriesInputChange: Handlers['handleCaloriesInputChange'];
	handleProteinInputChange: Handlers['handleProteinInputChange'];
	handleCarbsInputChange: Handlers['handleCarbsInputChange'];
	handleFatInputChange: Handlers['handleFatInputChange'];
}

const InfoForm = ({
	userFoodInfo,
	handleCaloriesInputChange,
	handleProteinInputChange,
	handleCarbsInputChange,
	filterFoodItemsByCalorie,
}: InfoFormProps) => {
	const [advOptions, setAdvOptions] = useState(false);

	let additionalInfo;

	let advancedButton;

	const handleShowAdvancedOptions = () => {
		if (advOptions === false) {
			setAdvOptions(true);
		} else {
			setAdvOptions(false);
		}
	};

	if (advOptions === false) {
		additionalInfo = null;
		advancedButton = (
			<button type="button" onClick={() => handleShowAdvancedOptions()}>
				Show Advanced
			</button>
		);
	} else {
		additionalInfo = (
			<div>
				<div className="infoform__form--forminput flex flex-col p-2 w-96">
					<label htmlFor="protein" className="text-center">
						Protein
					</label>
					<input
						type="text"
						id="protein"
						value={userFoodInfo.protein}
						onChange={handleProteinInputChange}
					/>
				</div>
				<div className="infoform__form--forminput flex flex-col p-2 w-96">
					<label htmlFor="carbs" className="text-center">
						Carbs
					</label>
					<input
						type="text"
						id="carbs"
						value={userFoodInfo.carbs}
						onChange={handleCarbsInputChange}
					/>
				</div>
				<div className="infoform__form--forminput flex flex-col p-2 w-96">
					<label htmlFor="fat" className="text-center">
						Fat
					</label>
					<input type="text" id="fat" />
				</div>
			</div>
		);
		advancedButton = (
			<button type="button" onClick={() => handleShowAdvancedOptions()}>
				Hide Advanced
			</button>
		);
	}

	return (
		<div className="infoform self-center p-2 my-2">
			<form className="infoform__form items-center flex flex-col">
				<div className="infoform__form--forminput flex flex-col p-2 w-96">
					<label htmlFor="calories" className="text-center">
						Enter your calories
					</label>
					<input
						type="text"
						id="calories"
						onChange={(e) => {
							handleCaloriesInputChange(e);
							filterFoodItemsByCalorie(e.target.value);
						}}
					/>
				</div>
				{additionalInfo}
				{advancedButton}
			</form>
		</div>
	);
};

export default InfoForm;
