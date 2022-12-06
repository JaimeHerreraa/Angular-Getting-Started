import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { IProduct } from "./product";
import { ProductListComponent } from "./product-list.component";
import { ProductService } from "./product.service";
import { ProductsTableComponent } from "./products-table.component";

describe('ProductListComponent (deep)', () => {
    let fixture: ComponentFixture<ProductListComponent>;
    let data: IProduct[];
    let mockProductService = jasmine.createSpyObj(['getProducts', 'getProduct', 'handleError']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductListComponent, ProductsTableComponent, ConvertToSpacesPipe],
            providers: [{provide: ProductService, useValue: mockProductService}],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(ProductListComponent);
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

    it('should render ProductsTableComponent as a child component', () => {
        mockProductService.getProducts.and.returnValue(of(data));

        fixture.detectChanges();

        expect(fixture.debugElement.query(By.directive(ProductsTableComponent)).name).toBe('pm-table');
        expect(fixture.debugElement.query(By.directive(ProductsTableComponent)).componentInstance.showImage).toBe(true);
    })
})