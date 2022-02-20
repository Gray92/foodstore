import axios from "axios";

export const BasketAction = {
	plusFood: async (userId: string, foodId: string):Promise<any> => {	
			await axios.post('http://localhost:8080/api/basket',
				{ userId: userId, id: foodId })
			
	},
	deleteFood: async (userId: string, foodId: string):Promise<any> => {
			await axios.put('http://localhost:8080/api/basket',
				{ userId: userId, id: foodId }
			)
	}
}