import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * @ProductFilter
 * @description
 * product filter
 */

@Pipe({name: 'pfilter', pure: false })
export class ProductFilter implements PipeTransform {


    /**
     * @override transform method of PipeTransform class
     * @param items
     * @param args
     * @returns {any}
     */
   /*
    transform(items: any, args:string): any {
        if(items){
            //TODO return filter product here
            return items;
        }
    }*/

    transform( items: any,args: any): any {
        console.log("filterSearchString:::"+args);
        console.log("filerProduct:::"+JSON.stringify(items));
        if(items.length === 0 || args === ''){
            //TODO return filter product here
            return items;
        }
        const itemName: string ='name'
        const resultArray = [];
        for(const item of items){
            if(item[itemName].toLowerCase().indexOf(args.toLowerCase())!== -1) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }

    /*
    transform( product: any,searchString:string): any {
        console.log("filterSearchString:::"+searchString);
        console.log("filerProduct:::"+JSON.stringify(product));
        if(product){
            //TODO return filter product here
            return product
        }
        return product;

        // create instance vars to store keys and final output
        let keyArr: any[] = Object.keys(items),
            dataArr = [];

        // loop through the object,
        // pushing values to the return array
        keyArr.forEach((key: any) => {
            if(items[key]==args) {
                dataArr.push(items[key]);
            }
        });
        if(dataArr.length=0){
            return items;
        }else{
            return dataArr;
        }
        // return the resulting array

    }*/
}