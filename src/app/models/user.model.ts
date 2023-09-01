export class User {
    infos!: Object;
    results!: Object;
    id?: {
        name: string,
        value: string
    };
    gender?: string;
    name?: {
        first: string,
        last: string,
        title: string
    };
    location?: {
        city: string,
        coordinates: {
            latitude: string,
            longitude: string
        },
        country: string,
        postcode: number,
        state: string,
        stret: {
            name: string,
            number: number
        },
        timezone: {
            description: string,
            offset: string
        }
    };
    email?: string;
    login?: {
        md5: string,
        password: string,
        salt: string,
        sha1: string,
        sha256: string,
        username: string,
        uuid: string
    };
    dob?: {
        age: number,
        date: string
    };
    registered?: {
        age: number,
        date: string
    };
    phone?: string;
    cell?: string;
    picture?: {
        large: string,
        medium: string,
        thumbnail: string
    };
    nat?: string;
}