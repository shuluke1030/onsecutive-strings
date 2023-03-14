function longestConsec(strarr, k) {
    n = strarr.length;
    if(k > n || k <= 0 || n === 0 ){
        return "";
    }
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


