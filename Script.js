
//now for the tricky part
const form = document.getElementById("Application");
const name = document.getElementById("fullname");
const nameerr = document.getElementById("nameerror");
const Age = document.getElementById("myage");
const ager= document.getElementById("agerror");
const bday = document.getElementById("birthday");
const bdayerr = document.getElementById("bdayerror");
const home = document.getElementById("home");
const homerr = document.getElementById("homeerror");
const depends = document.getElementById("depends");
const deeperr = document.getElementById("dependerror");
const guns = document.getElementById("guns");
const gunerr = document.getElementById("gunerror");
const IQ = document.getElementById("IQ");
const IQerr = document.getElementById("IQerror");
const shoes = document.getElementById("shoes");
const shoerr= document.getElementById("shoeerror");
const blow = document.getElementById("blows");
const blowerr = document.getElementById("blowerror");
const cats = document.getElementById("cats");
const catserr = document.getElementById("caterror");
const ph = document.getElementById("ph");
const pherr = document.getElementById("pherror");
const coke = document.getElementById("Coke");
const cokeerr = document.getElementById("cokeerror");
const felony = document.getElementById("felony");
const felonerr = document.getElementById("felonyerror");
const voices = document.getElementById("voice");
const voiceerr = document.getElementById("voiceerror");
const confirmmessage = document.getElementById("confirmationMessage")
//taking care of the event listener
form.addEventListener("submit", function(event){
event.preventDefault();

const myname= name.value;
const myage = Age.value;
const mybday = bday.value;
const myhome = home.value;
const mydepend = parseInt(depends.value) 
const myguns = parseInt(guns.value)
const myIQ = parseInt(IQ.value)
const myshoes = parseInt(shoes.value);
const myblows = parseInt(blow.value);
const mycat = parseInt(cats.value);
const myph = parseInt(ph.value);
const mycokerules = coke.value;
const myfelony = parseInt(felony.value);
const myvoice = parseInt(voices.value);
 
//errors
nameerr.textContent = "";
ager.textContent=  "";
bdayerr.textContent= "";
homerr.textContent= "";
deeperr.textContent= "";
gunerr.textContent= " ";
IQerr.textContent= " ";
shoerr.textContent= " ";
nameerr.textContent= "";
blowerr.textContent = "";
catserr.textContent= "";
pherr.textContent= "";
cokeerr.textContent= "";
felonerr.textContent= "";
voiceerr.textContent= "";

//if statements and such
let isValid = true;

if (myname === "")
{nameerr.textContent = "Fill out your name. It's not that hard";
  isValid = false;
}


if (myage <= 0)
{ager.textContent = "How old are you?";
  isValid = false;
}

if (mybday === "")
{bdayerr.textContent ="Give me your birthday. Now.";
isValid = false;

}
 
if (myhome === "")
{homerr.textContent ="OI! PUT DOWN YOUR BLOODY HOME ADDRESS YA DUMB GIT!";
isValid = false;
}

if (mydepend <= 0)
{deeperr.textContent = "PUT DOWN THE NUMBER OF DEPENDENT AND NOONE GETS HURT!!!";
 isValid = false;

}


if (myguns <= 0)
{gunerr.textContent = "I'M HENRY THE EIGHTH I AM! HENRY THE EIGHTH I AM I AM!";
isValid = false;
} 
  
 if (myIQ <= 0)
{IQerr.textContent ="Hello Darkness my old friend. I've come to talk to you again";
isValid = false;
}


if (myshoes <= 0)
{ shoerr.textContent = "GIVE.ME.YOUR.SHOE.SIZE!!!";
isValid = false;}

if (myblows <= 0)
{blowerr.textContent = "Despite all my rage I am still just a rat in a cage";
isValid = false;
}
if (mycat <= 0)
{catserr.textContent = "Soon may the Wellerman come to bring us sugar and tea and rum! One day when the toungin' is done we'll take our leave and go";
isValid = false;
}

if (myph <= 0)
{pherr.textContent ="GARFIELD YOU FAT CAT!";
 isValid = false;}

if (mycokerules === "")
  {cokeerr.textContent = "A MAN HAS FALLEN INTO THE RIVER IN LEGO CITY!";
 isValid = false;}
  
    if (myfelony <= 0)
   {felonerr.textContent ="PUT DOWN YOUR CHAINSAW AND LISTEN TO ME!";
    isValid = false;}
   
    if (myvoice <= 0)
{ voiceerr.textContent = "HUSH LITTLE BABY DON'T SAY A WORD. AND JUST IGNORE THOSE WORDS YOU HEARD. IT'S JUST THE BEASTS UNDER YOUR BED. IN YOUR CLOSET. IN YOUR HEAD!";
   isValid = false;
}

if(isValid)
{confirmmessage.textContent = "Thank you for applying to [REDACTED].";
 Application.reset();
}
//and that's it!
});
