import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchItem: string = '';
  constructor(activatedRoute: ActivatedRoute, private router: Router) {

    activatedRoute.params.subscribe((item) => {
      if (item['searchItem']) {
        this.searchItem = item['searchItem'];
      }
    });
  }

  ngOnInit(): void {
  }

  
  search() {
    if (this.searchItem)
      this.router.navigateByUrl('/search/' + this.searchItem)
  }
}
