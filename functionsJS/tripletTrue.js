function tripletTrue(str){
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1] && str[i +1] === str[i + 2])
            return true
    }
    return false
}
