import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'A simple test Recipe', 
    'https://get.pxhere.com/photo/dish-meal-food-salad-produce-eat-meat-lunch-cuisine-delicious-soup-onion-cheese-cook-sausage-cut-asian-food-swiss-pickles-real-oil-pho-spaghetti-frisch-vinegar-substantial-paprika-discs-thai-food-sausage-salad-meat-products-chinese-food-southeast-asian-food-noodle-soup-886770.jpg'),
    new Recipe('Surmai Fry', 'Surmai fry', 
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/SURMAI_FRY.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
