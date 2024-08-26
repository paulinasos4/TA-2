function leapYears(año){
    if (año % 4===0){
        if (año % 100===0){
            if (año % 400===0){
                console.log(true);
            } else{
                console.log(false);
            }
        }else{
            console.log(true);
        }
    }else{
    console.log(false); 
    }
}
leapYears(2005);
leapYears(1980);
