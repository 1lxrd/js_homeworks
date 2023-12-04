let checkProbabilityTheory = (count) => {
    even = 0;
    odd = 0;
    for (let i = 0; i<count; i++) {
        j = Math.floor(Math.random() * 991) + 100;
        j % 2 === 0? even++ : odd++;
    }
    console.log(
        `\n Total numbers: ${even+odd} \n`,
        `Even numbers: ${even} \n`,
        `Odd numbers: ${odd} \n`,
        `Even to odd ratio: ${Math.round(even/odd*100)} % \n`,
        `Even ratio: ${Math.round(even/(even+odd)*100)} % \n`,
        `Odd ratio: ${Math.round(odd/(even+odd)*100)} % \n`
        )
}