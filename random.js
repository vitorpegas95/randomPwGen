function GenPassword(length)
{
    var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var symbols = "*+!%#";
    var password = "";
    
    var probs = [50, 80, 100];
    
    for( var i = 0; i < length; i++ )
    {
        var type = Math.floor((Math.random()*100)+1);
        var b;
        
        if(type < probs[0])          //Letter
        {
            b = abc[Math.floor((Math.random() * abc.length-1) + 0)];
            while(typeof b === 'undefined')
            {
                b = abc[Math.floor((Math.random() * abc.length-1) + 0)];
            }
        }
        else if(type < probs[1])     //Number
        {
            b = Math.floor(Math.random()*10);
        }
        else if(type < probs[2])     //Symbol
        {
            b = symbols[Math.floor(Math.random()*symbols.length)-1];
            while(typeof b === 'undefined')
            {
                b = symbols[Math.floor(Math.random()*symbols.length)-1];
            }
        }
        
        password += b;
    }
    
    return password;
}
