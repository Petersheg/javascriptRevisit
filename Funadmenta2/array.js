// CHALLENGE ONE

function calcAverage(firstScore, secondScore, thirdScore) {
    return Math.round((firstScore + secondScore + thirdScore)/3)
}

const avgDolphines = calcAverage(1,2,3);
const avgKaolas = calcAverage(1,1,6);

function checkwinner(avgDolphines,avgKaolas) {
    if(avgDolphines >= avgKaolas*2){
        return console.log(
            `Dolphines wins against Koala (${avgDolphines} vs ${avgKaolas})`
        )
    }else if(avgKaolas >= avgDolphines*2){
        return console.log(
            `Koala wins against Dolphine (${avgKaolas} vs ${avgDolphines})`
        );
    } else{
        return console.log(
            `No Team win (${avgKaolas} vs ${avgDolphines})`
        );
    }
}

//checkwinner(avgDolphines,avgKaolas);;

// CHALLENGE TWO

const tip = [];
const total = [];

function calcTip(billValue) {
    for(let i = 0; i < billValue.length; i++){
        if(billValue[i] >= 50 && billValue[i] <= 300){
            tip.push(0.15 * billValue[i]);
            total.push(tip[i] + billValue[i]);
        }else{
             tip.push( 0.2 * billValue[i]);
             total.push(tip[i] + billValue[i]);
             //console.log(billValue[i]);
        }
    }
}

function calAverage(arr){
    sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    let arrAverage = sum/arr.length
    return arrAverage;
}

function getMax(arr){
    return arr.reduce((p,c)=>{
      return p > c ? p : c;
    },0);
}

function arrMax(arr){
    let max = arr[0];
    for(let i = 0; i<arr.length;i++){
        if(arr[i] > max) max = arr[i];
    }
    return max;
}

function arrMinMax(arr1,arr2){
    // Merge the array, check for the minimum number, then the maximum number
    // Merging the arrays
    const arr = arr1.concat(arr2);
    // check for minimum value in the merge array
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i<arr.length;i++){
        let currentValue = arr[i];
        if(currentValue < min) min = currentValue;
        if(currentValue > max) max = currentValue;
    }
    console.log(min, max);;
}

const bills = [22,295,176,440,37,105,10,1100,86,52 ]
calcTip(bills)
const tipAvg = calAverage(tip);
const totalAvg = calAverage(total);
const tipMax = getMax(tip);
const tipArrMax= arrMax(tip);

arrMinMax([3,7,3,0],[1,9,6]);