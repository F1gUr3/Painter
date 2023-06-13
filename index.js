let szinek = ["piros", "kék", "zöld", "kék"];


function feladat01(szinek){
    let combinations = [];
    let temporary = [];

    if(szinek.length == 1){
        return 0
    }
    else{
        combinations.push(szinek);
    
    for (let i = 0; i < szinek.length; i++) {

        for (let j = i; j < szinek.length; j++) {
            if(j >= szinek.length){
                j = j - szinek.length;
            }
            
            temporary.push(szinek[j])
        
        
        } 
        
        
        combinations.push(temporary);
        
        
    }
    return combinations.length;
    }
    
}



console.log(feladat01(szinek));