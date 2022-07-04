const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        let result = `Мне ${obj.age} и я владею языками: `; 
        for(let lang in obj.skills.languages){
            result += `${obj.skills.languages[lang].toUpperCase()} `;
        }
        return result;
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let result = '';
    for(let lang in plan.skills.programmingLangs){
        result += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]}`;
    }
    return result;
}

showExperience(personalPlanPeter);
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));