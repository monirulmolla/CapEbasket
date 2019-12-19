import { Product } from '../product/product.model'

export class Category {
    /**
     * Constructor for Category class
     * @param label
     * @param id
     * @param product
     */
    constructor(public label: string, public id: string, public product: Product) {
    }
}