import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { StarComponent } from "../shared/star.component";
import { IProduct } from "./product";
import { ProductsTableComponent } from "./products-table.component"

describe('ProductTableComponent (deep)', () => {
    let fixture: ComponentFixture<ProductsTableComponent>;
    let data: IProduct[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductsTableComponent, ConvertToSpacesPipe, StarComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })

        data = [
            {
              "productId": 1,
              "productName": "Leaf Rake",
              "productCode": "GDN-0011",
              "releaseDate": "March 19, 2021",
              "description": "Leaf rake with 48-inch wooden handle.",
              "price": 19.95,
              "starRating": 3.2,
              "imageUrl": "assets/images/leaf_rake.png"
            },
            {
              "productId": 2,
              "productName": "Garden Cart",
              "productCode": "GDN-0023",
              "releaseDate": "March 18, 2021",
              "description": "15 gallon capacity rolling garden cart",
              "price": 32.99,
              "starRating": 4.2,
              "imageUrl": "assets/images/garden_cart.png"
            },
            {
              "productId": 5,
              "productName": "Hammer",
              "productCode": "TBX-0048",
              "releaseDate": "May 21, 2021",
              "description": "Curved claw steel hammer",
              "price": 8.9,
              "starRating": 4.8,
              "imageUrl": "assets/images/hammer.png"
            },
            {
              "productId": 8,
              "productName": "Saw",
              "productCode": "TBX-0022",
              "releaseDate": "May 15, 2021",
              "description": "15-inch steel blade hand saw",
              "price": 11.55,
              "starRating": 3.7,
              "imageUrl": "assets/images/saw.png"
            },
            {
              "productId": 10,
              "productName": "Video Game Controller",
              "productCode": "GMG-0042",
              "releaseDate": "October 15, 2020",
              "description": "Standard two-button video game controller",
              "price": 35.95,
              "starRating": 4.6,
              "imageUrl": "assets/images/xbox-controller.png"
            }
          ]

        fixture = TestBed.createComponent(ProductsTableComponent);
    })

    describe('Integration Tests', () => {
        it('should be call onRatingClicked method', () => {
            fixture.componentInstance.filteredProducts = data;
            fixture.componentInstance.productsLength = data.length;
            spyOn(fixture.componentInstance, 'onRatingClicked');

            fixture.detectChanges();
            const starComponents = fixture.debugElement.queryAll(By.directive(StarComponent));
            starComponents[0].query(By.css('.crop')).triggerEventHandler('click');

            expect(fixture.componentInstance.onRatingClicked).toHaveBeenCalled();
        })

        it('should emit a string value when the ratingClicked event triggers', () => {
            fixture.componentInstance.filteredProducts = data;
            fixture.componentInstance.productsLength = data.length;
            spyOn(fixture.componentInstance, 'onRatingClicked');

            fixture.detectChanges();

            const starComponents = fixture.debugElement.queryAll(By.directive(StarComponent));
            (<StarComponent>starComponents[0].componentInstance).ratingClicked.emit('emitted');

            expect(fixture.componentInstance.onRatingClicked).toHaveBeenCalledOnceWith('emitted');
        })
    })
})