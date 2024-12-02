import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://images.ricardocuisine.com/services/wysiwyg/3346.jpg',
    description:
      'Originaire de Cuba, le mojito est une boisson populaire à base de rhum mélangé avec de la menthe, du jus de lime et du sucre de canne. L’été ne serait pas ce qu’il serait sans un grand verre de ce cocktail pour accompagner nos 5 à 7!',
  };
}
