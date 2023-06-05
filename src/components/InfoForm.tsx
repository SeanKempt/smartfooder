import { useState } from 'react';
import { FoodInfo, Handlers } from '../App';

interface InfoFormProps {
	userFoodInfo: FoodInfo;
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
				<label htmlFor="protein">Protein</label>
				<input
					type="text"
					id="protein"
					value={userFoodInfo.protein}
					onChange={handleProteinInputChange}
				/>
				<label htmlFor="carbs">Carbs</label>
				<input
					type="text"
					id="carbs"
					value={userFoodInfo.carbs}
					onChange={handleCarbsInputChange}
				/>
				<label htmlFor="fat">Fat</label>
				<input type="text" id="fat" />
			</div>
		);
		advancedButton = (
			<button type="button" onClick={() => handleShowAdvancedOptions()}>
				Hide Advanced
			</button>
		);
	}

	return (
		<div className="infoform">
			<form>
				<label htmlFor="calories">Enter your calories</label>
				<input type="text" id="calories" onChange={handleCaloriesInputChange} />
				{additionalInfo}
				{advancedButton}
			</form>
		</div>
	);
};

export default InfoForm;
