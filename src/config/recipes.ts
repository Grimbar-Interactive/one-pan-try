type RecipeType = {
    name: string,
    imgURL: string,
    time: string,
    servingNum: number,
    cost: string,
    ingredients: string[],
    steps: string[],
}

export const recipes: RecipeType[] = [{
    name: "Pizza", 
    imgURL: "images/pizza.jpg", 
    time: "1 hour", 
    servingNum: 4,
    cost: "$2 per serving", 
    ingredients: ["Crust", "Cheese", "Tomato Sauce", "Sausage", "Peppers"], 
    steps: ["Preheat oven to 400", "Put sauce on crust", "Add cheese", "Add all other toppings", "Bake for 12 mintues"],
}]