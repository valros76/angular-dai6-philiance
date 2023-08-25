import { Observable, Subscription, interval, of } from "rxjs";
import { take, map, tap, mergeMap, concatMap, exhaustMap, switchMap, delay } from "rxjs/operators";


export class ObservablesPreview {
    instructionObservable!: Observable<number | string> | Subscription;
    objectACounter: number = 0;
    objectBCounter: number = 0;
    objectAStyle: any = { gridColumn: "1" };
    objectBStyle: any = { gridColumn: "1" };
    btnFluxAState: boolean = false;
    btnFluxBState: boolean = false;

    constructor(
        public observableTitle: string,
        public objectAText: string,
        public objectBText: string,
        public btnFluxAText: string,
        public btnFluxBText: string,
        public fluxInstructionsType: string,
        public observableType: string
    ) { }

    launchObservableMethod(observableType: string): string {
        this.setObservableMapMethod(observableType);
        return observableType;
    }

    translateNameObjectInColor(nameObject: "A" | "B"): string {
        return nameObject === "A" ? "green" : "blue";
    }

    getObjectObservable$(nameObject: "A" | "B"){
        const isAObject: boolean = nameObject === "A";
        isAObject ? this.objectACounter++ : this.objectBCounter++;
        const objectIndex = isAObject ? this.objectACounter : this.objectBCounter;
        console.log(`L'objet %c${nameObject} ${objectIndex} est appelé !`, `text-decoration: underline; color: ${this.translateNameObjectInColor(nameObject)}`);
        isAObject ? this.objectAStyle.gridColumn = `${objectIndex + 1}` : this.objectBStyle.gridColumn = `${objectIndex + 1}`;
        if(isAObject){
            this.btnFluxAState = true;
            this.btnFluxBState = false;
        }else{
            this.btnFluxAState = false;
            this.btnFluxBState = true;
        }

        return of({ nameObject, objectIndex}).pipe(
            delay(isAObject ? 2000 : 3000)
        );
    }

    defineObservableMapMethod(observableType: string, callback: any){
        switch(observableType){
            case "concatMapExemple":
                return concatMap(callback);
            case "exhaustMapExemple":
                return exhaustMap(callback);
            case "switchMapExemple":
                return switchMap(callback);
            case "mergeMapExemple":
            default:
                return mergeMap(callback);
        }
    }

    setObservableMapMethod(observableType: string): void {

        this.instructionObservable = interval(500).pipe(
            take(12),
            map(value => value % 2 === 0 ? "A" : "B"),
            tap(
                nameObject =>
                    console.log(`L'observable de haut niveau appelle l'objet %c${nameObject}`, `color: ${this.translateNameObjectInColor(nameObject)}`)
            ),
            this.defineObservableMapMethod(observableType, (nameObject: "A" | "B") => this.getObjectObservable$(nameObject))
            ).subscribe();
    }

    // FIN DE LA CLASSE
}