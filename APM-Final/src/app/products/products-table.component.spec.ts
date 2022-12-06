import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { IProduct } from "./product";
import { ProductsTableComponent } from "./products-table.component"

describe('ProductsTableComponent', () => {

    let fixture: ComponentFixture<ProductsTableComponent>;
    let data: IProduct[];
    let mockTitleEmmiter = jasmine.createSpyObj(['emit']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductsTableComponent, ConvertToSpacesPipe],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(ProductsTableComponent);
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
    })

    it('should get the list of filtered products', () => {
        fixture.componentInstance.filteredProducts = data;
        fixture.componentInstance.productsLength = data.length;

        fixture.detectChanges();

        expect(fixture.componentInstance.filteredProducts.length).toBeGreaterThan(0);
    })

    describe('shallow tests', () => {
        it('should render the hide and show button element', () => {
            fixture.componentInstance.filteredProducts = data;
            fixture.componentInstance.productsLength = data.length;
    
            fixture.detectChanges();
    
            expect(fixture.debugElement.query(By.css('.btn-primary')).nativeElement.textContent).toContain('Image');
            expect(fixture.nativeElement.querySelector('.btn-primary').textContent).toContain('Image');
        })
    
        it('should render a list of products', () => {
            fixture.componentInstance.filteredProducts = data;
            fixture.componentInstance.productsLength = data.length;
    
            fixture.detectChanges();
    
            expect(fixture.debugElement.queryAll(By.css('.products-row')).length).toEqual(5);
        })
    })

    describe('toggleImage', () => {
        it('should toggle the boolean value showImage to false', () => {
            fixture.componentInstance.showImage = true;

            fixture.componentInstance.toggleImage();
            fixture.autoDetectChanges();

            expect(fixture.componentInstance.showImage).toBe(false);
        })

        it('should toggle the boolean value showImage to true', () => {
            fixture.componentInstance.showImage = false;

            fixture.componentInstance.toggleImage();
            fixture.autoDetectChanges();

            expect(fixture.componentInstance.showImage).toBe(true);
        })
    })

    describe('onRatingClicked', () => {
        it('should emit a string message', () => {
            let message: string = 'Leaf Cart';
            fixture.componentInstance.pageTitleEmitter = mockTitleEmmiter;

            fixture.componentInstance.onRatingClicked(message)
            fixture.detectChanges();

            expect(mockTitleEmmiter.emit).toHaveBeenCalledWith(`Product List: ${message}`);
        })
    })
})