import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: string){
    let input = [];
    input = value.split(' ');
    let output = [];
    for(let e of input){
      let word = [];
      if(e.toLowerCase()==='of'||e.toLowerCase()==='the'){
        output.push(e.toLowerCase());
      }else{
        word.push(e[0].toUpperCase());
        for(let i=1;i<e.length;i++){
          word.push(e[i].toLowerCase());
        }
        output.push(word.join(''));
      }
    }
    return output.join(' ');
  }
}
