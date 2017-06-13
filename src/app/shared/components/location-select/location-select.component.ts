import { 
  Component, 
  OnInit, 
  Input,
  Output, 
  EventEmitter 
} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { PostService } from '../../services/post.service';
import { Location } from './location.model';

@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html',
  styleUrls: ['./location-select.component.sass'],
  providers: [PostService]
})
export class LocationSelectComponent implements OnInit {
  @Input() location: Location;
  @Input() element: string;
  @Output() locationChange: EventEmitter<Location> = new EventEmitter();
  locations = [];
  isResponseEmpty: boolean = false;
  isNotFound: boolean = false;
  newCity: string;
  newRegion: string;
  newCountry: string;
  newComment: string;
  searchText: string = '';

  private searchTerm = new Subject<string>();

  constructor(private postSevice: PostService) {
    this.searchTerm.debounceTime(300).distinctUntilChanged().subscribe((searchTerm) => {
      this.postSevice.searchLocation(searchTerm, this.element).subscribe((response) => {
        this.locations = response as Location[];
        if (!response.length) {
          this.isResponseEmpty = true;
        }
      }, (e) => {
        this.locations.length = 0;
        this.isResponseEmpty = true;
        this.locations.push(new Location('Novosibirsk', 'Novosibirskaya oblast', 'Russia'));
        this.locations.push(new Location('Novkuzneck', 'Kemerovskaya oblast', 'Russia'));
        this.locations.push(new Location('Novorossiisk', 'Krasnodarskii krai', 'Russia'));
      });
    });
   }

  ngOnInit() {
    this.element = this.element || 'city';
  }

  onKeyup(searchText: string) {
    if (searchText.length >= 2) {
      this.searchTerm.next(searchText);
    } else {
      this.locations.length = 0;
    }
    this.searchText = searchText;
    this.location.isSelected = false;
    this.isResponseEmpty = false;
 }

  onSelectLocation(location: Location) {
    this.location = location;
    this.searchText = this.location[this.element];
    this.location.isSelected = true;
    this.locations.length = 0;
    this.locationChange.emit(location);
  }

  onAddLocationLinkClick() {
    this.isNotFound = true;
  }

  onNewLocationSubmit(formValue) {
    const location = new Location(formValue.newCity, formValue.newRegion, formValue.newCountry);
    const author_comment = formValue.newComment;
    this.postSevice.addLocation(location, author_comment).subscribe((response) => {
      console.log(response);
    }, (e) => {
      console.log(e);
    });
    this.isNotFound = false;
    this.isResponseEmpty = false;
  }
}
