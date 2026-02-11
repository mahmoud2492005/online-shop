import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtaration'
})
export class FiltarationPipe implements PipeTransform {
    mainFilters: string[] = ['Full Outfit', 'Women', 'Men', 'Electronics'];

  transform(value: any[], filterName:string ): any[] {

  

if(!filterName || filterName==='Full Outfit'){
return value
}
else if( filterName==='More'){
      // return value.filter(item => !this.mainFilters.includes(item.category?.name)
      return value.filter((item)=>!this.mainFilters.includes(item.category?.name))
}
else{
    return value.filter((item)=>item.category.name.includes(filterName));

}


  }

}
