import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({name: 'titleFrom'})

export class TitleFromPipe implements PipeTransform {
  transform(value: string, objects_list: {title: string, value: string}[]): any {
    let obj = objects_list.find(el => el.value == value);
    return obj ? obj.title : '???'
  }
}
