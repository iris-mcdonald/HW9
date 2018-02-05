    function setBoxId(box) 
    {
        var result = ' ';
        if (box == 1) {
          result = "a";
        } else if (box == 2) {
          result = "b";
        } else {
          result = "c";
        }
        return result;
    }//end of setBoxId

        function chgBoxColor(boxId)
        {
            var result = 0;
            while ((result == 0) || (result > 3)) {//run for each box
                var result = myRandomNumber();
            }

            /*assigns class name-in css class assigns background color*/
            /*debugger;*/
            /*alert("result = " + result);*/
            
            
            switch (result)
            {
                case 1:
                    /*document.write('Case One: ' + result);*/
                    document.getElementById(boxId).className = "one";
                    break;
                case 2:
                    /*document.write('Case Two: ' + result);*/
                    document.getElementById(boxId).className = "two";
                    break;
                case 3:
                    /*document.write('Case Three: ' + result);*/
                    document.getElementById(boxId).className = "three";
                    /*$('"#" + boxId').attr('class' , 'three');*/
                    break;
                default:
                    document.write('switch case Not One, Two, or Three ' + result);//class not changed
                    break;
            } 

            return result;
        }

        function myRandomNumber()
        {
            var result = Math.floor((Math.random() * 10) + 1);
            /*document.write("random generator: " + result);*/
            return result;
        }

        function setWinOrLoseMsg(array_BoxColors)
        {
            /*document.write(" SetWinOrLoseMsg array(1)= " + array_BoxColors[1] + " " +
                array_BoxColors[2] + " " + array_BoxColors[3]);*/
            if ((array_BoxColors[1] == array_BoxColors[2]) &&
                (array_BoxColors [2] == array_BoxColors[3])) {
                 /*document.getElementById("msg").innerHTML = "Congratulations, you won!";*/
                $("#msg").text("Congratulations, you won!");
            } else {
                 /*document.getElementById("msg").innerHTML = "Sorry, try again!";*/
                $("#msg").text("Sorry, try again!");
            }
        }//end of setWinOrLoseMsg

        function startProcess()
        {
            checkButtonHover();
                   
            
            var array_BoxColors = [0,0,0,0];//declare array for storing box color results

            for (var box = 1; box <= 3; box++)//process the three text boxes
            {
                var boxId = setBoxId(box);//set id value for the text box that you're processsing
                               
                for ( var i = 1; i <= 10; i++)//run change box color function 10X 
                {
                    var colorOfBox = chgBoxColor(boxId);//returns 1,2,or 3 based on what color set
                    array_BoxColors[box] = colorOfBox;                             
                } 
            }//end of process text box loop
            /*document.write("*** array values:  " + array_BoxColors[1] + " " + array_BoxColors[2]
                + " " + array_BoxColors[3] + " *** ");*/

            setWinOrLoseMsg(array_BoxColors);//display win or lose msg based on text box colors 
            
                            
        }//end of startProcess

    function checkButtonHover() 
    {
            $("#btn").hover(function()
            {
                alert("You entered hover!");
                $("#btn").text("SPIN NOW");
                $("#btn").css(
                    {
                    'background-color': 'darkgreen'
                    })
            });//end of button hover JQuery event handler    
    }//end of checkButtonHover      
    
    function onExit()
    {
        return "Goodbye!...";//this never displays in W3Schools, or in my code!
    }
           
$(document).ready(function()
{
    console.log( "ready!" );
    startProcess();
}    
);
    
   
    







   
   


        

     

   
