function GenRandom(hash, debug, trim)
{
	var um, dois, trez, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, catorze, quinze;
	var letters = new Array();
	letters[0] = "a";
	letters[1] = "b";
	letters[2] = "c";
	letters[3] = "d";
	letters[4] = "e";
	letters[5] = "f";
	letters[6] = "g";
	letters[7] = "h";
	letters[8] = "i";
	letters[9] = "j";
	letters[10] = "k";
	letters[11] = "l";
	letters[12] = "m";
	letters[13] = "n";
	letters[14] = "o";
	letters[15] = "p";
	letters[16] = "q";
	letters[17] = "r";
	letters[18] = "s";
	letters[19] = "t";
	letters[20] = "u";
	letters[21] = "v";
	letters[22] = "w";
	letters[23] = "x";
	letters[24] = "y";
	letters[25] = "z";
	var a = Math.floor((Math.random()*100)+1);
	var b = Math.floor((Math.random()*100)+1);
	
	var numbers = new Array();
	numbers[0] = 0;
	numbers[1] = 1;
	numbers[2] = 2;
	numbers[3] = 3;
	numbers[4] = 4;
	numbers[5] = 5;
	numbers[6] = 6;
	numbers[7] = 7;
	numbers[8] = 8;
	numbers[9] = 9;
	
	var symbols = new Array();
	symbols[0] = "*";
	symbols[1] = "+";
	symbols[2] = "!";
	symbols[3] = "%";
	symbols[4] = "#";
	
	for(var i = 0; i < 15; i++)
	{
		var a = Math.floor((Math.random()*100)+1);
		
		if(a < 50)	//It's letter
		{
			var c = Math.floor((Math.random()*100)+1);
			if(c < 50)	//Lower case
			{
				var b = letters[Math.floor((Math.random()*26)+0)];
			}
			else	//uppercase
			{
				var b = letters[Math.floor(Math.random() * 26) + 0];
				b = b.toUpperCase();
			}
		}
		else if(a >= 50 && a < 90)		//It's number
		{
			var b = numbers[Math.floor((Math.random()*10)+0)];
		}
		else
		{
			var b = symbols[Math.floor((Math.random()*5)+0)];
		}
			
		if(i == 0)
		{						
			um = b;
		}
		else if(i == 1)
		{
			dois = b;
		}
		else if(i == 2)
		{
			trez = b;
		}
		else if(i == 3)
		{
			quatro = b;
		}
		else if(i == 4)
		{
			cinco = b;
		}
		else if(i == 5)
		{
			seis = b;
		}
		else if(i == 6)
		{
			sete = b;
		}
		else if(i == 7)
		{
			oito = b;
		}
		else if(i == 8)
		{
			nove = b;
		}
		else if(i == 9)
		{
			dez = b;
		}
		else if(i == 10)
		{
			onze = b;
		}
		else if(i == 11)
		{
			doze = b;
		}
			else if(i == 12)
		{
			treze = b;
		}
		else if(i == 13)
		{
			catorze = b;
		}
		else if(i == 14)
		{
			quinze = b;
		}
	}
	
	if(typeof um === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		um = z;
	}
	else if(typeof dois === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		dois = z;
	}
	else if(typeof trez === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		trez = z;
	}
	else if(typeof quatro === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		quatro = z;
	}
	else if(typeof cinco === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		cinco = z;
	}
	else if(typeof seis === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		seis = z;
	}
	else if(typeof sete === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		sete = z;
	}
	else if(typeof oito === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		oito = z;
	}
	else if(typeof nove === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		nove = z;
	}
	else if(typeof dez === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		dez = z;
	}
	else if(typeof onze === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		onze = z;
	}
	else if(typeof doze === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		doze = z;
	}
	else if(typeof treze === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		treze = z;
	}
	else if(typeof catorze === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		catorze = z;
	}
	else if(typeof quinze === 'undefined')
	{
		var z = symbols[Math.floor(Math.random() * 5) + 0];
		quinze = z;
	}
	
	var random1 = um + dois +trez +quatro+ cinco +seis +sete +oito + nove + dez +  onze + doze + treze + catorze + quinze;
		
	document.getElementById("random").innerHTML = random1;
}