import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * Ce fichier est le point d'entrée de notre application Angular.
 * Ici, le provider "platformBrowserDynamic" a pour rôle d'assurer la compilation et l'exécution
 * JIT (Just In Time) des applications Angular, sur les différents navigateurs pris en charge.
 * 
 * La méthode "bootstrapModule" a pour rôle de fournir le module principal de notre projet Angular
 * lors de son amorce.
 * 
 * On peut noter également que cette méthode renvoie un retour sous forme de "promesse", car on observe un 
 * chaînage avec la méthode catch(), qui permet de récupérer les potentielles erreurs et a ici pour rôle
 * d'afficher ce message d'erreur dans la console.
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));