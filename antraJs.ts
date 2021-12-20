// #1
const example: number = 32243;
const exampleArr: string[] = example.toString().split("")
const reversedArr = (arr0: string[]):number | string => {
    let reverseArr = [];
    for(let i = arr0.length - 1; i >= 0; i--){
        reverseArr.push(arr0[i]);
    }
    return parseInt(reverseArr.join(''));
}
console.log(reversedArr(exampleArr));

// #2
const stringTrue = "racecar";
const stringFalse = "toyota";

const isPangram = (str0: string):boolean => {
    let str0Arr: string[] = str0.split("");
    let pangramArr: string[] = [];
    for(let i = str0Arr.length - 1; i >= 0; i--){
        pangramArr.push(str0Arr[i]);
    }
    let pangramStr: string = pangramArr.join('');
    if(pangramStr === str0){
        return true
    } else {
        return false
    }
}
console.log(isPangram(stringTrue));
console.log(isPangram(stringFalse));

// #3
const test3: string = "webcam";

const stringCombos = (str1: string):string[] => {
   let stringsList: string[] = [];
   for(let i = 0; i < str1.length; i++) {
       for(let j = i + 1; j < str1.length + 1; j++) {
           stringsList.push(str1.slice(i, j));
       }
   }
   return stringsList;
}
console.log(stringCombos(test3));

// #4
const test4:string = "Incomprehensibile"

const alphabetical = (str2:string):string => {
    return str2.split('').sort().join('');
}
console.log(alphabetical(test4));

// #5
const test5:string = "unity duty destiny";

const sentenceUpper = (str3:string):string => {
    let str3Split:string[] = str3.split(' ');
    let str3Upper:string[] = [];
    for(let i = 0; i < str3Split.length; i++){
        str3Upper.push(str3Split[i].charAt(0).toUpperCase()+str3Split[i].slice(1));
    }
    return str3Upper.join(' ');
}
console.log(sentenceUpper(test5));

// #6
const test6:string = "Test your Programming skills";

const longestWord = (str4:string):string => {
    let str4Arr:any = str4.match(/\w[a-z]{0,}/gi);
    let result:string = str4Arr[0];

    for(let i = 1; i < str4Arr.length; i++){
        if(result.length < str4Arr[i].length){
            result = str4Arr[i]
        }
    }
    return result;
}
console.log(longestWord(test6));

//#7 
const test7:string = "JavaScript";

const numOfVowels = (str5:string):number =>{
    let vowels:string = 'aeiouAEIOU';
    let vowelNum:number = 0;

    for(let i = 0; i < str5.length; i++){
        if(vowels.indexOf(str5[i]) !== -1){
            vowelNum +=  1;
        }
    }
    return vowelNum;
}
console.log(numOfVowels(test7));

// #8
const test80:number = 37;
const test81:number = 40;

const isPrime = (num:number):boolean => {
    if(num === 1){
        return false
    } else if (num === 2){
        return true
    } else {
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return true
    }
}
console.log(isPrime(test80));
console.log(isPrime(test81));

// #9
const type = (foo:any):any => {
    return typeof foo
}
console.log(type({}));
console.log(type(true));
console.log(type(isPrime));
console.log(type(10));
console.log(type("foo"));
console.log(type(undefined));

// #10
const matrix = (num:number):any => {
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            if(i === j){
                console.log(' 1 ');
            } else {
                console.log(' 0 ');
            }
        }
        console.log('----------')
    }
}
matrix(3);

// #11
const secondGreatestLowest = (numArr:number[]):string =>{
    numArr.sort((a:number, b:number)=>{return a - b});
    let unique:number[] = [numArr[0]];
    let result:number[] = [];
    for(let j = 1; j < numArr.length; j++){
        if(numArr[j - 1] !== numArr[j]){
            unique.push(numArr[j])
        }
    }
    result.push(unique[1], unique[unique.length - 2]);
    return result.join(', ')
}

console.log(secondGreatestLowest([10,13,12,19,21,30]));

//#12 
const perfectNum = (num:number):boolean => {
    let temporary:number = 0; 
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0){
            temporary += i;
        }
    }
    if(temporary === num && temporary !== 0){
        return true;
    } else {
        return false;
    }
}
console.log(perfectNum(27));
console.log(perfectNum(28));

// #13
const factors = (num:number):number[] =>{
    let numFactors:Array<number> = []
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            numFactors.push(i);
            if(num / i !== i){
                numFactors.push(num / i);
            }
        }
    }
    numFactors.sort((x:number, y:number)=> {
        return x - y;
    });
    return numFactors;
}
console.log(factors(15));
console.log(factors(16));

// #14
const toCoins = (num:number, coins:number[]):number | number[] =>{
    if(num === 0){
        return []
    } else {
        if(num >= coins[0]){
            let amountleft:number = (num - coins[0]);
            return [coins[0]].concat(toCoins(amountleft, coins)); 
        } else {
            coins.shift();
            return toCoins(num, coins);
        }
    }
} 
console.log(toCoins(46, [25, 10, 5, 2, 1]));

//#15
const expo = (a:number, b:number):number => {
    return Math.pow(a, b);
}
console.log(expo(2, 3));

//#16
const uniqueChar = (str6:string):string =>{
    let uniqueStr:string = "";
    let str6Split:string[] = str6.split("");
    str6Split.forEach(char => {
        if(uniqueStr.includes(char) === false){
            uniqueStr += char
        }
    })
    return uniqueStr;
}
console.log(uniqueChar("terrance"));

//#17
const charCount = (str7: string):any => {
    let uniqueChar:any = {};
    str7.replace(/\S/g, (l):any => {
        console.log(typeof l);
        uniqueChar[l] = (isNaN(uniqueChar[l]) ? 1 : uniqueChar[l] + 1);
    });
    return uniqueChar;
};

console.log(charCount("Drizzy"));

//#18
const arrayBinarySearch = (numArray:number[], element:number):number | null => {
    let mPosition:number = Math.floor(numArray.length/2 );
    if(numArray[mPosition] === element){
        return mPosition;
    } else if (numArray.length === 1){
        return null;
    } else if (numArray[mPosition] < element){
        let arr:number[] = numArray.slice(mPosition + 1);
        let res:any = arrayBinarySearch(arr, element);
        if(res === null){
            return null;
        } else {
            return mPosition + 1 + res;
        }
    }else {
        let arr1:number[] = numArray.slice(0, mPosition);
        return arrayBinarySearch(arr1, element);
    }
}

console.log(arrayBinarySearch([4, 5, 25, 45, 59, 67, 74, 98, 132, 151, 191, 200], 74));
console.log(arrayBinarySearch([2, 34, 39, 49, 55, 63, 68, 75, 104, 120, 158, 165], 39));

// #19
const greaterElements = (arr:number[], num:number):number[] => {
    return arr.filter(n => n > num);
};

console.log(greaterElements([65, 16, 0, 6, 64, 1, 68], 16));
console.log(greaterElements([1, 2, 3, 4, 5, 6], 4));

// #20
const randIdGen = (len:number):string => {
    let text:string = "";
    let char_list:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < len; i++){
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log(randIdGen(10));

//#21
const subSetFunc = (arr:number[], arrLen:number):any => {
    let resultSet:number[][] = [];
    let result:number[] = [];
    for(let i = 0; i < Math.pow(2, arr.length); i++){
        let result:number[] = [];
        let j:number = arr.length - 1;
        do{
            if((i & (1 << j )) !== 0){
                result.push(arr[j]);
            }
        } while(j--);
        if(result.length >= arrLen){
            resultSet.push(result);
        }
    }
    return resultSet;
}
console.log(subSetFunc([1, 2, 3], 2));

//#22
const characterNum = (str:string, letter:string):number => {
    let letterCount:number = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === letter){
            letterCount += 1;
        }
    }
    return letterCount;
}
console.log(characterNum('Treehouse', 'e'));

//#23
const notRepeated = (str:string):string => {
    let arr = str.split('');
    let result = '';
    let character = 0;
    for(let i = 0; i < arr.length; i++){
        character = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                character++;
            }
        }
        if(character < 2){
            result = arr[i];
            break;
        }
    }
    return result;
}
console.log(notRepeated('objective-c'));

// #24
const bubbleSort = (arr:number[]):number[] => {
    let swap:boolean;
    let num:number = arr.length - 1;
    let arr1:number[] = arr;
    do {
        swap = false;
        for(let i = 0; i < num; i++){
            if(arr1[i] < arr1[i + 1]){
                let temp:number = arr1[i];
                arr1[i] = arr1[i + 1];
                arr1[i + 1] = temp;
                swap = true;
            }
        }
        num--;
    } while (swap);
    return arr1;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// #25
const longestString = (strArr:string[]):string =>{
    return strArr.reduce((name:string, str)=>{
        return name.length > str.length ? name : str;
    }, "");
}
console.log(longestString(["Saab", "Volvo", "BMW"]))

// #26
const longestSubStringWORepeat = (arr:string):string => {
    let strArr:string[] = arr.split('');
    let currentChar:string;
    let str:string = "";
    let longestStr:string = "";
    let hash:any = {};
    for(let i = 0; i < strArr.length; i++){
        currentChar = strArr[i];
        if(!hash[strArr[i]]){
            str += currentChar;
            hash[strArr[i]] = {index:i};
        } else {
            if(longestStr.length <= str.length){
                longestStr = str
            }
            let prevDupeIndex:any = hash[currentChar].index;
            let strPrevDupe:any = arr.substring(prevDupeIndex + 1, i);
            str = strPrevDupe + currentChar;
            hash = {};
            for(let j = prevDupeIndex + 1; j <= i; j++){
                hash[arr.charAt(j)] = {index:j};
            }
        }
    }
    return longestStr.length > str.length ? longestStr : str;
}

console.log(longestSubStringWORepeat("google.com")); 

//#27
const longestPalindrome = (str:string):string =>{
    const isPalindrome =(thisString:string):boolean => {
        let reverse = thisString.split("").reverse().join("");
        return thisString == reverse;
    }
    let maxLength:number = 0;
    let maxp:string = '';
        for(let i = 0; i < str.length; i++){
            let subStr:string = str.substring(i, str.length);
            for(let j = subStr.length; j >= 0; j--){
                let subSubStr:string = subStr.substring(0, j);
                if(subSubStr.length <= 1){
                    continue;
                }
                if(isPalindrome(subSubStr)){
                    if(subSubStr.length > maxLength){
                        maxLength = subSubStr.length;
                        maxp = subSubStr;
                    }
                }
            }
        }
    return maxp;
}
console.log(longestPalindrome('abracadabra'));
console.log(longestPalindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'));

//#28 
const shortName = (firstName:string):boolean | string => {
    if(firstName.length < 5){
        return true;
    } else if (firstName.length > 7){
        return false;
    } else {
        return `${firstName}'s name has average length`;
    }
}

const isShort = (firstName:string, callback:any):string =>{
    const cb: boolean|string = callback(firstName);
    if(cb === true){
        return `${firstName}'s name is below average in length!`
    } else if(cb === false){
        return `${firstName}'s name is above average in length!`
    } else {
        return cb;
    }
}

console.log(isShort("Kanye", shortName));
console.log(isShort("Pharrell", shortName));
console.log(isShort("Zhu", shortName));

//#29 
const thisDotName = ():any =>{
    console.log(thisDotName.name)
};
thisDotName();