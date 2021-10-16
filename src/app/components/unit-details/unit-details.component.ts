import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectUnitDetail} from '../../store/selector';
import {Subscription} from 'rxjs';
import {UnitsDto} from '../../models/units.dto';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnDestroy {
  unitDetailSubscription: Subscription;
  unitDetail: UnitsDto = new UnitsDto();

  constructor(private _store$: Store) {
    this.unitDetailSubscription = this._store$.pipe(select(selectUnitDetail)).subscribe((response: {unit: UnitsDto}) => {
      this.unitDetail = response.unit;
    })
  }

  getUnitKeys() {
    return Object.keys(this.unitDetail ? this.unitDetail : {});
  }

  getCostKeys(cost) {
    return Object.keys(cost ? cost : {});
  }

  ngOnDestroy(): void {
    if (this.unitDetailSubscription) {
      this.unitDetailSubscription.unsubscribe();
    }
  }
}
