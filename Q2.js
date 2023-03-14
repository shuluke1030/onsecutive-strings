function longestConsec(strarr, k) {
let n = strarr.length;
let nw = "";
let max = "";
    
    for( i = 0; i < n; i++){
    nw = strarr.slice(i, i+k).join("");
    if(nw.length > max.length){
        max = nw;
    }
        
}
return max
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));