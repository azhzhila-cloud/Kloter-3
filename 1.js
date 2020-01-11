const fs = require('fs');

function myBio(name, age) {

    const data = {
        name: name,
        age: age,
        address: "Desa Cikedondong, Kecamatan Bantarsari, Kabupaten Cilacap",
        hobbies: ['design', 'coffee', 'learn coding'],
        is_married: false,
        list_school: [{
                name: "SDN Cikedondong 01",
                year_in: 2003,
                year_out: 2009,
                major: null
            },
            {
                name: "MTs MINAT Kesugihan",
                year_in: 2009,
                year_out: 2012,
                major: null
            },
            {
                name: "MA MINAT Kesugihan",
                year_in: 2013,
                year_out: 2016,
                major: 'IPA'
            }
        ],
        skill: [{
                skill_name: 'HTML',
                level: 'advanced'
            },
            {
                skill_name: 'CSS',
                level: 'advanced'
            },
            {
                skill_name: 'Javascript',
                level: 'beginner'
            },
            {
                skill: "css/scss/bootstrap",
                level: 'beginner'
            },
            {
                skill: "python",
                level: "beginner"
            },
            {
                skill: "mysql",
                level: "beginner"
            },
        ],
        interest_in_coding: true
    }

    fs.writeFileSync("./myBio.json", JSON.stringify(data));

    return JSON.stringify(data)
}

console.log(myBio("Miftahul Aziz", 22));