export interface Product{
    id: string,
    name: string,
    thumbnail_image: string,
    has_discount: boolean,
    discount: string,
    stroked_price: string,
    main_price: string,
    rating: number,
    sales: number,
    links:{
        details:string
    }
}