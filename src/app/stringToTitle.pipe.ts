import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'stringToTitle'
})
export class StringToTitlePipe implements PipeTransform {
    
    transform(value: string) {
        if(!value) {
            return null;
        }

        let sentence = value.toLowerCase()
        let words = sentence.split(' ');

        let title = "";

        for (let i = 0, len = words.length; i < len; i++) {
            let word = words[i];

            if(i > 0) {
                title = title.concat(' ');
            }
            
            if(i === 0 || !this.wordIsAPreposition(word)) {
                title = title.concat(this.capitalizeFirstLetter(word));
            }
            else {
                title = title.concat(word);
            }
        }

        return title;        
    }

    capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    wordIsAPreposition(word) {
        //Use a library or something else to know if the given word is a preposition?
        //Dirty implementation here.
        return ['of', 'the'].includes(word);
    }
}