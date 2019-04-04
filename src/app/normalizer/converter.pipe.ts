import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  prePosition:any;
  constructor(){
    this.prePosition = [
      'is',
      'a',
      'of',
      'for',
      'the'
    ]
  }

  transform(value: string){
    if(!value)
      return null;

    let input = [];
    input = value.split(' ');
    let output = [];
    for(let e of input){
      let word = [];
      if(this.prePosition.includes(e.toLowerCase())){
        output.push(e.toLowerCase());
      }else{
        try{
          word.push(e[0].toUpperCase());
        }catch(err){
          console.log(err);
        }
       
        for(let i=1;i<e.length;i++){
          word.push(e[i].toLowerCase());
        }
        output.push(word.join(''));
      }
    }
    let outStr = output.join(' ');
    let result = '';
    try{
      result += outStr[0].toUpperCase();
    }catch(err){
      console.log(err);
    }
    
    result += outStr.substr(1,outStr.length);
    
    return result;
  }
}
