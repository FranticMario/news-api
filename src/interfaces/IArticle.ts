// export interface IArticle {
//     status:       string;
//     totalResults: number;
//     articles:     Article[];
// }

export interface IArticle {
    source:      Source;
    author:      null | string;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  null | string;
    publishedAt: Date;
    content:     string;
}

export interface Source {
    id:   null | string;
    name: string;
}