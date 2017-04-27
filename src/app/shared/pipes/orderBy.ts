import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({name: 'orderBy'})

export class OrderByPipe implements PipeTransform {
  transform(obj: any, orderFields: string): any {
    let orderType = 'ASC';

    if (orderFields[0] === '-') {
      orderFields = orderFields.substring(1);
      orderType = 'DESC';
    }

    obj.sort((a, b) => {
      let [s1, s2] = orderType === 'ASC' ? [-1,1] : [1,-1];
      return _.get(a, orderFields) < _.get(b, orderFields) ? s1 : _.get(a, orderFields) > _.get(b, orderFields) ? s2 : 0;
    });
    return obj;
  }
}
