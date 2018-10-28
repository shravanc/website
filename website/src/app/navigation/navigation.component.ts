import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  lists$: Observable<any>;
  landing_page$: Object;

  all_list$: Object;

  constructor(private list_data_service: ListServiceService) { }

  ngOnInit() {
    this.list_data_service.getMenuLists().subscribe(
      data => { 
        console.log(data['sublists'])
        this.lists$ = data['sublists'];
    });

    this.list_data_service.getList('all').subscribe(
      data => {
        console.log(data['sublists'])
        this.landing_page$ = data;
        this.all_list$ = data['sublists'];
    });

  }

}
