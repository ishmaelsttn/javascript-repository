function funcAlert()
/*this is an alet using varialbes finding the percentage or muduolo of another number if and or else the number =0*/
{
   alert("the button is pushed");
    /* the variables rannum1 and 2 determine a number that is random which is or below the number 10*/
    var randNum1 = Math.ceil(Math.random()*20);
    var randNum2 = Math.ceil(Math.random()*20);
    /*alert("First num = " + randNum1 + "  Second Num " + randNum2);*/
    var sum = randNum1+randNum2;
    /*here down below the doc.getelement reserves the name in the html for the sum of the variables, it basically says that on the webpage sum = ran1 and 2 being added. These are the fuctions without the alert.*/
    document.getElementById("sumTag").innerHTML = "sum =" + sum;
    document.getElementById("NUMBALETSDOTHIS1").innerHTML = "randNum1 = " + randNum1;
    document.getElementById("NUMBALETSDOTHIS2").innerHTML = "randNum1 = " + randNum2;
    if (randNum1 % 2 ==0) 
    {
        document.getElementById("results").innerHTML = "this is an even number";
    } 
    /*else {
        document.getElementById("NUMBALETSDOTHIS3").innerHTML = "unless its"; 
    }*/
    /* some feedback would be good on lines 16 18 im not sure why its not working with the numbers on the page but whenever i add a line of else it doesnt show anything.*/
 
        document.getElementById("NUMBALETSDOTHIS4").innerHTML = "hooray! we got 20"; 
    }
   /* the sum else ifs below and up above determine what the equals will be declared as in the equations formed by the fuctions doc.getelement*/
   




    
    if (randNum1 % 2 ==0)
    /*the curriculum after this threw me off a little bit, i understood what i was doing in the process of the alerts yes and trial and erros helped with the understanding it was i guess finding the averages and greater less thans after this part*/
    {alert("randNum1 = " + randNum1 + "hmmm")}
    else
    {alert("randNum1 = " + randNum1 + "GOT IT i think")}
}



   
