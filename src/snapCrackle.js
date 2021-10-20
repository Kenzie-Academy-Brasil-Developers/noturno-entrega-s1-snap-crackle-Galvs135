function snapCrackle(maxValue)
{   
    let resposta = []
    for(counter = 1;counter <= maxValue; counter ++)
    {

        if(counter % 2 !== 0 && counter % 5 === 0)
        {
            resposta.push( " SnapCrackle")
        }else if(counter % 2 !== 0)
        {
            resposta.push(" Snap")
        }else if(counter % 5 === 0)
        {
            resposta.push(" Crackle")
        }else
        {
            resposta.push(' '+counter+'')
        }
    }
    return resposta 
}

console.log(""+snapCrackle(12));



function snapCracklePrime(maxValue)
{   
    let resposta = []
    for(counter = 1;counter <= maxValue; counter ++)
    {

        if(counter % 2 !== 0 && counter % 5 === 0)
        {
            if ( counter === 5)
            {
                resposta.push( " SnapCracklePrime")
            }else
            {
                resposta.push( " SnapCrackle")  
            }
        }else if(counter % 2 !== 0)
        {
            if (counter === 3 )
            {
               resposta.push(" SnapPrime")
            }else if( counter % 7 === 0)
            {
                resposta.push(" Snap") 
            }
            else if(counter % 3 !== 0 && counter > 1)
            {
                resposta.push(" SnapPrime")
            }else
            {
                resposta.push(" Snap")
            }
        }else if(counter % 5 === 0)
        {
            resposta.push(" Crackle")
        }else
        {
            if(counter === 2)
            {
                resposta.push(" Prime")
            }else
            {
                resposta.push(' '+counter)
            }
        }
    }
    return resposta 
}

console.log(""+snapCracklePrime(15));