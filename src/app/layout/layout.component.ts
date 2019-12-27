import { Component, ViewChild, OnInit, ElementRef , AfterViewInit , AfterViewChecked} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  implements OnInit, AfterViewInit, AfterViewChecked  {
  isNavbarShow: boolean;
  isShowMenu: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isNavbarShow = false;
  }

  ngAfterViewInit() {
    window.onclick = (event: any) => {
      if (!event.target.matches('.sidenav') && !event.target.matches('.openbtn')) {
            if (this.isNavbarShow) {
              this.isNavbarShow = false;
            }
      }
      if (!event.target.matches('.profile-pic') && !event.target.matches('.dropdown-content')) {
        if (this.isShowMenu) {
          this.isShowMenu = false;
        }
      }
    };
  }

  ngAfterViewChecked() {
      
  }
  hideNav() {
    this.isNavbarShow = false;
  }

  showNav() {
    this.isNavbarShow = true;
  }

  showMenu() {
    this.isShowMenu = true;
  }

  hideMenu() {
      this.isShowMenu = false;
  }

}
