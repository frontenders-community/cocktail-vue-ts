export type Ingredient = {
  name: string;
  part: number;
  color: string;
}

export type Cocktail = {
  name: string;
  ingredients: Ingredient[];
}