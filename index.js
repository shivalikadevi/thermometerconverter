const calculateTemp = () => {
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    
    const CeltoFah = (cel) => {let fahren=Math.round((cel*9/5)+32);
    return fahren;

    }   
    const FahtoCel = (fah) =>{let celi=Math.round((fah-32)*5/9);
    return celi;

    }     
    let result;
    if(valueTemp=='cel')
    {
        result=CeltoFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result} fahrenheit`;

    }
    else{ result=FahtoCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result} Celcius`;

    }

}