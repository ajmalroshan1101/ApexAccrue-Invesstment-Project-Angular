import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private el:ElementRef){}

  scrollToSection(sectionId: string, offsetTop: number = 120): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offsetTop;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
  

}
