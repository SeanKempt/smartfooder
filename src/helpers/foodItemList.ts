import { FoodItem } from '../App';
// this is just a placeholder area for food items till I actually start using the database of FDA for the various resturaunts etc.
export const foodItemList: FoodItem[] = [
	{ name: 'hamburger', calories: 800, protein: 125, carbs: 10, fat: 50 },
	{ name: 'hotdog', calories: 400, protein: 80, carbs: 5, fat: 5 },
];

const getFoodData = async (foodname: string, calories: string) => {
	const newCal = Number(calories);
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
						lte: newCal,
					},
				},
			}),
		}
	);
	const jsonData = await response.json();
	return jsonData;
};

export interface BrandedItemList {
	brand_name: string;
	brand_item_name: string;
	item_calories: number;
}

// Pulls data from API that is needed for the FoodCard componenent.
// Puts the data into an array. Only grabbing data that would be needed to be used within the app.
const extractApiData = async (foodName: string, calories: string) => {
	const foodData = await getFoodData(foodName, calories);
	const brandedFoodItemList = foodData.branded;
	const newBrandedFoodItemList: BrandedItemList[] = [];
	brandedFoodItemList.map((item: any) => {
		return newBrandedFoodItemList.push({brand_name: item.brand_name, brand_item_name: item.brand_name_item_name, item_calories: item.nf_calories });
	});
	return newBrandedFoodItemList;
};

export const testArrayThingy = await extractApiData('burger king', '1000');
console.log(testArrayThingy);