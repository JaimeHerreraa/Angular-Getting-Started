import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "./product";


@Component({
    selector: 'pm-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductsTableComponent {
    @Input() filteredProducts: IProduct[] = [];
    @Input() productsLength: number = 0;
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;
    @Output() pageTitleEmitter: EventEmitter<string> = new EventEmitter();

    onRatingClicked(message: string): void {
        this.pageTitleEmitter.emit(`Product List: ${message}`);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}