   /******************************************CALL and APPLY METHOD ***********************************************/ 
/* When one object wish to make use of another object's Method this keyword
   then the method must be call with Call keyword and the first parameter as the object calling it,
   eg to call book method with objectName we do, book.call(objectName,otherparameters);
*/    
const peterAL = {
     airline : 'PeterAL',
     code: 'PAL',
    booking: [],

    book(flitNo,userName){
        console.log(`
        ${userName} book on ${this.airline}, fligth  ${this.code}${flitNo} 
        `);
        this.booking.push({flight:`${this.airline}${flitNo}`,userName});
        console.log(this.booking);
    }
}

peterAL.book(477,'Peter Oluwasegun');
peterAL.book(566,'Olaniyan Tolu');

const kunlexAL = {
    airline : 'KunlexAL',
    code : 'KAL',
    booking : []
}

const book=peterAL.book;

book.call(kunlexAL,590,'Kunle Ara');

book.call(peterAL, 900 , 'Schengen Europe');