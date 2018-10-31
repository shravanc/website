import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() public carousel_list_id;
  items$: Object;
  constructor(private list_data_service: ListServiceService) { }

  ngOnInit() {
    console.log('======1========')
    console.log('======2========')
    console.log('======3========')
    console.log('======4========')
    console.log('======5========')
    console.log(this.carousel_list_id)
    console.log('======6========')
    console.log('======7========')
    console.log('======8========')
    console.log('======8========')
    console.log('======10========')
    console.log('======11========')

    this.list_data_service.getList(this.carousel_list_id).subscribe(
      data => {
        console.log('----CarousalOneLayoutsComponent----')
        console.log(this.carousel_list_id)
        console.log(data['sublists'])
        this.items$ = data['sublists'];
    });

  }

}
