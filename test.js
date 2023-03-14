function longestConsec(strarr, k) {
    let n = strarr.length
    let nw = ""
    for( let i = 0; i < n - k +1; i++){
        nw = strarr.slice(i,i+k)
        console.log(nw)
    }

}
longestConsec([1, 2, 4, 5], 3)