import { ComponentFixture, TestBed } from "@angular/core/testing"
import { WelcomeComponent } from "./welcome.component"

describe('WelcomeComponent', () => {
    let fixture: ComponentFixture<WelcomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
        })

        fixture = TestBed.createComponent(WelcomeComponent);
    })

    it('should display the pageTitle property in the div.card-header element', () => {
        //arrange
        fixture.componentInstance.pageTitle = 'Welcome';
        //act
        fixture.detectChanges();
        //assert
        expect(fixture.nativeElement.querySelector('.card-header').textContent).toContain('Welcome');
    })
})