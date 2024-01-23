export enum ProductType {
    Development = 'development',
    Design = 'design',
    Marketing = 'marketing'
}

export interface IProduct {
    id: string;
    text: string;
    title: string;
    link: string;
    image: string;
    time: string;
    type: ProductType;
}

export type IProductGrouped = Record<ProductType, IProduct[]>;