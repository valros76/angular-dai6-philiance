import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Dans le fichier app.module.ts, qui est le module de notre composant App (le composant principal de notre
 * application), on devra importer et déclarer nos différents composants pour les rendre accessible dans 
 * toute l'arborescence enfant de l'application.
*/
import { AppComponent } from './app.component';
import { WebSnapComponent } from './web-snap/web-snap.component';
import { ObservablesPreviewComponent } from './observables-preview/observables-preview.component';

/**
 * Pour déclarer ce fichier comme un module, on utilise le décorateur @NgModule, qui utilise 
 * un objet de configuration contenant au minimum :
 * declarations: utilise un tableau de données comme valeur, on y ajoutera tous les composants importés dans ce 
 *               module pour les déclarer à l'application.
 * imports: utilise un tableau de données comme valeur, ici on y retrouve la valeur "BrowserModule", qui est 
 *          le module en charge d'exporter l'infrastructure requise pour toutes les applications Angular.
 * providers: utilise un tableau de données comme valeur, il permet d'inclure des providers à un projet.
 *            On y retrouvera régulièrement la déclaration de Services utilisés par des modules, ou 
 *            des configurations spécifiques (par exemple, une configuration pour changer 
 *            la langue de l'application).
 * bootstrap: utilise un tableau de données comme valeur, il permet de définir à Angular quel composant utiliser
 *            pour amorcer l'application. La valeur contenue dans ce paramètre impactera alors le cycle de vie
 *            de votre application, qui dépendra du composant indiqué (composant principal, ici AppComponent).
 */
@NgModule({
  declarations: [
    AppComponent,
    WebSnapComponent,
    ObservablesPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
