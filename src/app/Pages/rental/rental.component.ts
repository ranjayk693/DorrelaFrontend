import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent {
  myControl = new FormControl<string | User>('');
  options: User[] = [
    { name: 'patna' },
    { name: 'ahamdabad' },
    { name: 'rajkot' },
  ];
  filteredOptions: Observable<User[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  IsToggle: boolean = false;
  toogleMenu() {
    //code
    this.IsToggle = !this.IsToggle;
  }
}
