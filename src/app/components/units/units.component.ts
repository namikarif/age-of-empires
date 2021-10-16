import {Component, OnInit} from '@angular/core';
import {CostDto, FilterDto} from '../../models/filter.dto';
import {HttpClient} from '@angular/common/http';
import {UnitsDto} from '../../models/units.dto';
import {Store} from '@ngrx/store';
import * as actions from "../../store/actions";
import {Router} from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  loading: boolean;
  ageOptions = [
    {
      label: 'All',
      value: 'All'
    },
    {
      label: 'Dark',
      value: 'Dark'
    },
    {
      label: 'Feudal',
      value: 'Feudal'
    },
    {
      label: 'Castle',
      value: 'Castle'
    },
    {
      label: 'Imperial',
      value: 'Imperial'
    }
  ];

  filterObject: FilterDto = {
    age: 'All',
    costs: [
      {
        enable: false,
        type: 'Food',
        values: [0, 0]
      },
      {
        enable: false,
        type: 'Wood',
        values: [0, 0]
      },
      {
        enable: false,
        type: 'Gold',
        values: [0, 0]
      }
    ]
  }

  unitList: Array<UnitsDto> = new Array<UnitsDto>();
  filteredUnitList: Array<UnitsDto> = new Array<UnitsDto>();

  constructor(private _http: HttpClient,
              private _store$: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this._http.get('assets/mock-data/age-of-empires-units.json').subscribe((response: { units: Array<UnitsDto> }) => {
      this.unitList = response.units;
      this.filteredUnitList = response.units;
      this.loading = false;
    }, () => this.loading = false);
  }

  applyFilter() {
    this.filteredUnitList = this.unitList.filter(unit => {
      if (this.filterObject.age !== 'All') {
        if (unit.age !== this.filterObject.age) {
          return false;
        }
      }

      for (let i = 0; i < this.filterObject.costs.length; i++) {
        if (this.filterObject.costs[i].enable) {
          if (unit.cost) {
            if (unit.cost[this.filterObject.costs[i].type]) {
              if (this.filterObject.costs[i].values[0] > unit.cost[this.filterObject.costs[i].type]) {
                return false;
              }
              if (this.filterObject.costs[i].values[1] < unit.cost[this.filterObject.costs[i].type]) {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }

      return true;
    });
  }

  getCostKeys(cost) {
    return Object.keys(cost ? cost : {});
  }

  openUnitDetail(unit: UnitsDto) {
    this._store$.dispatch(actions.getUnitDetail(unit));
    this.router.navigateByUrl('/unit-detail');
  }

  changeCheckbox(event, cost: CostDto) {
    if (!event.checked) {
      cost.enable = false;
      cost.values = [0, 0];

      this.applyFilter();
    }
  }
}
