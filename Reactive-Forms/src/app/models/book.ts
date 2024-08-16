export class Book {
    title: string;
    author: string;
    pages: number;
    price:Price;
    publishedDate: string;
    isPublished: boolean;
};

export class Price {
    currency: string;
    value: number;
}