import { TestBed } from "@angular/core/testing"
import { ProductService } from "./product.service"
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { IProduct } from "./product";

describe('ProductService', () => {
    let httpClientController: HttpTestingController;
    let productService: ProductService;
    let data: IProduct[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductService],
            imports: [HttpClientTestingModule]
        })

        httpClientController = TestBed.inject(HttpTestingController);
        productService = TestBed.inject(ProductService);

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

    describe('getProducts', () => {
        it('should make a get http method to fetch the products', () => {
            //make the http call
            let productsData: IProduct[];

            productService.getProducts().subscribe({
                next: (products) => {
                    productsData = products;
                    expect(productsData.length).toBe(5);
                }
            })

            //test the http url
            let req = httpClientController.expectOne('api/products/products.json');
            req.flush([...data]);

            expect(req.request.method).toEqual('GET');
            httpClientController.verify();
        })
    })
})