// Question 3. converts HEX to RGB. Autodect formats so that if you enter HEX color
//  format it returns RGB and if you enter RGB color format it returns HEX.

// color values for initial testing
let hexColor = '#6d325a';
let rgbColor = 'rgb(109, 50, 90)';

// function: takes a color number, hex or rgb; detects which type, and calls
// converter function to convert - hex to rgb, or rgb to hex.
function getColorType(colorNum) {
    // console.log(colorNum);
    // regex pattern matching to detect if color type is hex or rgb
    const hexColorRegEx = new RegExp(/^#([0-9a-f]{6})$/i);
    const rgbColorRegEx = new RegExp(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/);

    // determine whether color is hex or rgb
    if(hexColorRegEx.test(colorNum)) {
        // call converter function with color number and type
        return convertColorType(colorNum, 'hex');
    } else if (rgbColorRegEx.test(colorNum)){
        // console.log(colorNum);
        return convertColorType(colorNum, 'rgb');
    } 
    // else {
    //     console.log(`${colorNum} may not be a valid number`);
    // }
}

// function: takes a color number and type; converts the color and returns
// color number; if hex sent, returns rgb, if rgb sent, returns hex.
function convertColorType(colorNum, colorType){

    let retVal='',acc='';
    if(colorType==='hex') {
        // split the hex color number into 3 groups of 2 characters.
        // starting loop at 1 to ignore leading # of hex number
        for(let i=1,tmpNum='';i<colorNum.length;i+=2) {
            // get 2 characters at a time
            tmpNum = colorNum[i] + '' + colorNum[i+1]
            // convert the characters from hex to decimal
            if (i === 1 || i === 3) {
                acc = acc + parseInt(tmpNum, 16) + ', '
            } else {
                acc = acc + parseInt(tmpNum, 16)
            }
            // build the rgb string
            retVal = (`rgb(${acc})`);   
        };
       return retVal;
        
    } else if (colorType==='rgb') {
        // strip off the rgb and parenthesis
        tmpNum = colorNum.replace('rgb(','')
            .replace(')','')
            // divide rgb number into 3 groups
            .split(',')
            .forEach(num => {
                // convert the character string to decimal number
                // then convert to hex string
                num=parseInt(num, 10).toString(16);
                // combine the character groups
                retVal = acc += num;
            })
            // add preceding # to make a valid hex color number
        return '#' + retVal;    
    }
}

// TEST:
// function: call converter function with randomly generate color numbers
function testColorConverter (){
    let arrColors=[];

    // TODO: make this function DRY
    arrColors = randomColor(10, 'rgb');
    arrColors.forEach(col => {
        console.log(`${col} ==> ${getColorType(col)}`);
    })

    arrColors = randomColor(10, 'hex');
    arrColors.forEach(col => {
        // call the convert function to return rgb numbers
        console.log(`${col} ==> ${getColorType(col)}`);
    })
}

// function: generate random color numbers
function randomColor(num, colorType) {
    // generate random hex colors to test conversion to rgb
    let arrColors=[];
    if (colorType==='hex') {
        for (let n = 1; n <= num; n++) {
            // generate hex value for color
            newColor = '#' + Math.random().toString(16).slice(2, 8);
            // add test numbers to array
            arrColors.push(newColor);          
        }
    } else if (colorType==='rgb') {
        for (let n = 1; n <= num; n++) {
            let tmpArr = [];
            for (i = 1; i <= 3; i++) {
                // generate 3 random numbers and add to tmp array
                tmpArr.push(Math.floor(Math.random() * 255));
            }
            // add rgb prefix, convert number to string, and replace , with , + space.
            arrColors.push(`rgb(${tmpArr.toString().replace(/,/g, ', ')})`);
        }
    }    
    return arrColors;
}

testColorConverter();