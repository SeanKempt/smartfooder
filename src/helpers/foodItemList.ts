import { FoodItem } from '../App';
// this is just a placeholder area for food items till I actually start using the database of FDA for the various resturaunts etc.
export const foodItemList: FoodItem[] = [
	{ name: 'hamburger', calories: 800, protein: 125, carbs: 10, fat: 50 },
	{ name: 'hotdog', calories: 400, protein: 80, carbs: 5, fat: 5 },
];

const getFoodData = async (foodname: string, calories: number) => {
	const response = await fetch(
		`https://trackapi.nutritionix.com/v2/search/instant`,
		{
			method: 'POST',
			headers: {
				'x-app-id': 'f9070b54',
				'x-app-key': 'f0aa9ab98ab52c2e0207b141a3ca66bd',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				branded: true,
				query: `${foodname}`,
				detailed: true,
				full_nutrients: {
					'208': {
						lte: calories,
					},
				},
			}),
		}
	);
	const jsonData = await response.json();
	console.log(jsonData);
};

await getFoodData('mcdonalds', 500);
