export class Movie {
    id: number;
    video: boolean;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    adult: boolean;
    overview: string;
    release_date: Date;

    constructor() {
        this.adult = false;
    }
}