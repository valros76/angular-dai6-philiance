import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private token = "MonFauxJetonDeSecurite";

    getToken(): string {
        return btoa(this.token);
    }
}