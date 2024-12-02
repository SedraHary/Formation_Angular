import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://images.ricardocuisine.com/services/wysiwyg/3346.jpg',
      description:
        'Originaire de Cuba, le mojito est une boisson populaire à base de rhum mélangé avec de la menthe, du jus de lime et du sucre de canne. L’été ne serait pas ce qu’il serait sans un grand verre de ce cocktail pour accompagner nos 5 à 7!',
    },
    {
      name: 'Aperol Spritz',
      img: 'https://images.ricardocuisine.com/services/wysiwyg/6536.jpg',
      description:
        'Apéritif classique originaire de l’Italie et boisson estivale par excellence, l’Aperol Spritz est aussi un incontournable de ce côté-ci de l’Atlantique. C’est un cocktail simple à assembler, tellement qu’on le retrouve plus souvent à l’apéritif.',
    },
    {
      name: 'Sangria',
      img: 'https://images.ricardocuisine.com/services/wysiwyg/507.jpg',
      description:
        'Un pichet de sangria sur la terrasse avec les amis est la quintessence de l’été. Sucrée, fruitée et alcoolisée, cette boisson est un peu trop facile à boire et c’est pourquoi on la consomme avec modération.',
    },
  ];
}
