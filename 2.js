const validateUsername = (username) => {
    const re = /^[a-z][a-zA-Z](?=.{5,12}$)
    if (re.test(username)) return true
    return false
}

const validatePass = (pass) => {
    const re = /(?=.*[0-9]{1})(?=.*[A-Z]{5})(?=.*[#?!@$%^&*-]{1})[a-zA-Z0-9#?!@$%^&*-]{7}/gmi
    if (re.test(pass)) return true
    return false
}

// validatePass() and validateEmail BIG O => O(1) 

//valid email and pass
console.log(validateUsername("azh_zhila"))
console.log(validatePass("MAZIZ*9"))

//invalid email and pass
console.log(validateUsername("azh'zhila"));
console.log(validatePass("maziz/*03"));