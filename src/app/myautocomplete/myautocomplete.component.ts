import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-myautocomplete',
  templateUrl: './myautocomplete.component.html',
  styleUrls: ['./myautocomplete.component.css'],
})
export class MyautocompleteComponent implements OnInit {
  search = new Subject<string>();
  filteredData: Observable<any[]>;
  name = '';
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.filteredData = this.search
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((d) =>
        d ? this.searchService.getData(d) : Observable.of<any[]>([])
      )
      .catch((error) => {
        return Observable.of<any[]>([]);
      });
  }

  searchNames(name) {
    this.search.next(name);
  }
}
