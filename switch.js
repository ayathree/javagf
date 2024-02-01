
function calcSeason(month) {
    let getSeason
    switch (true) {
        case (month >= 3 && month <=5):
            getSeason = 'Spring'
            break;
        case (month >=6 && month <=8):
            getSeason = 'Summer'
            break;
        case (month >=9 && month <=11):
            getSeason = 'Autumn'
            break;
        case (month ==12 || month == 1 || month == 2):
            getSeason = 'Winter'
            break;
        default:
            return "Invalid"
            
    }
    return `the season is ${getSeason}`
    
}
const firstSeason = calcSeason(7)
console.log(firstSeason) 

// easy type
let getSeason = 78;
switch (true) {
    case(getSeason >= 3 && getSeason<=5) :
    console.log('spring');   
        break;
    case (getSeason >=6 && getSeason <=8):
        console.log('summer');
        break;
    case(getSeason >=9 && getSeason <=11):
    console.log('autumn');
    break;
    case(getSeason ==12 || getSeason == 1 || getSeason == 2):
    console.log('winter');
    break;
    default:
       console.log('invalid');
}


