export class Product {

    /**
     * Constructor for Product class
     * @param id
     * @param img_url
     * @param name
     * @param price
     * @param basketCount
     * @param description
     * @param basketPrice
     */
    constructor(public id: string, public img_url:string, public name: string, public price: number,
                public basketCount: number, public description: string, public basketPrice: number) {
    }
}