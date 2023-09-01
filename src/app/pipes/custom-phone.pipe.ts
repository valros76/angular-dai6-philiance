import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "customPhone"
})
export class CustomPhonePipe implements PipeTransform{
    transform(value: string, ...args: any[]) {
        let transformatedValue: string = value;
        transformatedValue = transformatedValue.replaceAll("-", ".");
        return transformatedValue;
    }
}