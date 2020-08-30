/*Name - Aryan Agarwal
Roll No - 19CS30005*/

let marks_awarded=[5],selected=[5],help_taken=[5];
let questionNo=0,sum=0;

//initialising all elements of help_taken array as None
for(i=0;i<5;i++)
{
    help_taken[i]="None";
}

function help5050(temp)
{
    
    document.getElementById("helpparenthint").style.display="none";
    document.getElementById("helpparent5050").style.display="none";
    document.getElementById("selected_option_parent_a").style.display="none";
    document.getElementById("selected_option_parent_b").style.display="none";
    document.getElementById("selected_option_parent_c").style.display="none";
    document.getElementById("selected_option_parent_d").style.display="none";
    document.getElementById("selected_option_parent_none").style.display="block";
    
    var temparray= document.getElementsByClassName("Qoptionparent");
        if(temp==1)
        {
            temparray[1].style.display="none";
            temparray[2].style.display="none";
            help_taken[0]="50/50";
        } 
        if(temp==2)
        {
            temparray[0].style.display="none";
            temparray[1].style.display="none";
            help_taken[1]="50/50";
        }
        if(temp==3)
        {
            temparray[0].style.display="none";
            temparray[3].style.display="none";
            help_taken[2]="50/50";
        }
        if(temp==4)
        {
            temparray[1].style.display="none";
            temparray[3].style.display="none";
            help_taken[3]="50/50";
        }
        if(temp==5)
        {
            temparray[2].style.display="none";
            temparray[3].style.display="none";
            help_taken[4]="50/50";
        }
}

function helphint(temp)
{

    for(i=0;i<5;i++)
    {
        if(i+1==temp)
            {
                help_taken[i]="Hint";
            }
    }

    document.getElementById("child1").style.display="none";
    document.getElementById("child2").style.display="block";
    document.getElementById("helpparenthint").style.display="none";
    document.getElementById("helpparent5050").style.display="none";
    document.getElementById("back_arrow").style.display="block";
    document.getElementById("selected_option_parent_a").style.display="none";
    document.getElementById("selected_option_parent_b").style.display="none";
    document.getElementById("selected_option_parent_c").style.display="none";
    document.getElementById("selected_option_parent_d").style.display="none";
    document.getElementById("selected_option_parent_none").style.display="none";
}

function back(){

    document.getElementById("child2").style.display="none";
    document.getElementById("child1").style.display="block";
    document.getElementById("back_arrow").style.display="none";
    document.getElementById("selected_option_parent_a").style.display="none";
    document.getElementById("selected_option_parent_b").style.display="none";
    document.getElementById("selected_option_parent_c").style.display="none";
    document.getElementById("selected_option_parent_d").style.display="none";
    document.getElementById("selected_option_parent_none").style.display="block";
}

function selected_option(temp)
{
    
    
    if(temp=='A')
    {
        document.getElementById("selected_option_parent_a").style.display="block";
        document.getElementById("selected_option_parent_b").style.display="none";
        document.getElementById("selected_option_parent_c").style.display="none";
        document.getElementById("selected_option_parent_d").style.display="none";
        document.getElementById("selected_option_parent_none").style.display="none";
    }
    if(temp=='B')
    {
        document.getElementById("selected_option_parent_a").style.display="none";
        document.getElementById("selected_option_parent_b").style.display="block";
        document.getElementById("selected_option_parent_c").style.display="none";
        document.getElementById("selected_option_parent_d").style.display="none";
        document.getElementById("selected_option_parent_none").style.display="none";
    }
    if(temp=='C')
    {
        document.getElementById("selected_option_parent_a").style.display="none";
        document.getElementById("selected_option_parent_b").style.display="none";
        document.getElementById("selected_option_parent_c").style.display="block";
        document.getElementById("selected_option_parent_d").style.display="none";
        document.getElementById("selected_option_parent_none").style.display="none";
    }
    if(temp=='D')
    {
        document.getElementById("selected_option_parent_a").style.display="none";
        document.getElementById("selected_option_parent_b").style.display="none";
        document.getElementById("selected_option_parent_c").style.display="none";
        document.getElementById("selected_option_parent_d").style.display="block";
        document.getElementById("selected_option_parent_none").style.display="none";
    }
}

function Q(temp,option)
{

    // this if condition is used for intermediate questions and assign the display of class and id's as block
    if(temp>0 && temp<5) 
    {
        
        var temparray= document.getElementsByClassName("Qoptionparent");
            for(i=0;i<4;i++)
            {
                temparray[i].style.display="block";
            }

        document.getElementById("helpparenthint").style.display="block";
        document.getElementById("helpparent5050").style.display="block";
    }

    if(temp>=0 && temp<=5)
    {
        document.getElementById("selected_option_parent_a").style.display="none";
        document.getElementById("selected_option_parent_b").style.display="none";
        document.getElementById("selected_option_parent_c").style.display="none";
        document.getElementById("selected_option_parent_d").style.display="none";
        document.getElementById("selected_option_parent_none").style.display="block";
    }
        
    if(temp==0)
    {
        document.getElementById("helpparenthint").style.display="block";
        document.getElementById("helpparent5050").style.display="block";
        document.getElementById("child1").style.display="block";
        document.getElementById("child4").style.display="none";
        document.getElementById("Qchild").innerHTML="Question 1";
        document.getElementById("Qtextchild").innerHTML="Apple iOS applications are saved in which extension?";
        document.getElementById("child2").innerHTML="Apple uses 'i' in most of their products";

       var temparray= document.getElementsByClassName("Qoptionchild");
           temparray[0].innerHTML="(A) .ipa";
           temparray[1].innerHTML="(B) .apk";
           temparray[2].innerHTML="(C) .exe";
           temparray[3].innerHTML="(D) .ipk";
    }

    if(temp==1)
    {
        document.getElementById("Qchild").innerHTML="Question 2";
        document.getElementById("Qtextchild").innerHTML="Motorola is owned by which company ?";
        document.getElementById("child2").innerHTML="Chinese company having their tagline as - 'for those who do'";

        var temparray= document.getElementsByClassName("Qoptionchild");
           temparray[0].innerHTML="(A) Samsung";
           temparray[1].innerHTML="(B) Google";
           temparray[2].innerHTML="(C) Huawei";
           temparray[3].innerHTML="(D) Lenovo";

        selected[0]=option;
        
        if(option=='A')
        {
            marks_awarded[0]=4;
        }
            else 
            {
                marks_awarded[0]=0;
            }

    }

    if(temp==2)
    {
        document.getElementById("Qchild").innerHTML="Question 3";
        document.getElementById("Qtextchild").innerHTML="Which of the following is not a programming language ?";
        document.getElementById("child2").innerHTML="You are seeing this webpage because of this language";

        var temparray= document.getElementsByClassName("Qoptionchild");
           temparray[0].innerHTML="(A) Python";
           temparray[1].innerHTML="(B) HTML";
           temparray[2].innerHTML="(C) Java Script";
           temparray[3].innerHTML="(D) BASIC";

        selected[1]=option;

        if(option=='D')
        {
            marks_awarded[1]=4;
        }
            else 
            {
                marks_awarded[1]=0;
            }

    }

    if(temp==3)
    {
        document.getElementById("Qchild").innerHTML="Question 4";
        document.getElementById("Qtextchild").innerHTML="Which of the following is not an OS  ?";
        document.getElementById("child2").innerHTML="see me if you can :)";

        var temparray= document.getElementsByClassName("Qoptionchild");
           temparray[0].innerHTML="(A) DOS";
           temparray[1].innerHTML="(B) Mac";
           temparray[2].innerHTML="(C) C";
           temparray[3].innerHTML="(D) Windows";

        selected[2]=option;

        if(option=='B')
        {
            marks_awarded[2]=4;
        }
            else 
                {
                    marks_awarded[2]=0;
                }

    }

    if(temp==4)
    {
        document.getElementById("Qchild").innerHTML="Question 5";
        document.getElementById("Qtextchild").innerHTML="When did Angry Birds originally released ?";
        document.getElementById("child2").innerHTML="#10yearchallenge can be used regarding the release";

        var temparray= document.getElementsByClassName("Qoptionchild");
           temparray[0].innerHTML="(A) 2009";
           temparray[1].innerHTML="(B) 2012";
           temparray[2].innerHTML="(C) 2010";
           temparray[3].innerHTML="(D) 2008";

        selected[3]=option;

        if(option=='C')
        {
            marks_awarded[3]=4;
        }
            else
             {
                marks_awarded[3]=0;
             }

    }
    
    if(temp==5)
    {

        selected[4]=option;

        if(option=='A')
        {
            marks_awarded[4]=4;
        }
            else 
                {
                    marks_awarded[4]=0;
                }

        document.getElementById("Qchild").innerHTML="Results !";
        document.getElementById("Qtextchild").innerHTML="Detailed Analysis";
        document.getElementById("child1").style.display="none";
        document.getElementById("child2").style.display="none";
        document.getElementById("child3").style.display="block"
        document.getElementById("helpparenthint").style.display="none";
        document.getElementById("helpparent5050").style.display="none";

        var temparray= document.getElementsByClassName("selected_option");
            for(i=0;i<5;i++)
            {
                temparray[i].innerHTML=selected[i];
            }

        
        var temparray= document.getElementsByClassName("help_taken");
            for(i=0;i<5;i++)
            {
                temparray[i].innerHTML=help_taken[i];
            }
       
        for(i=0;i<5;i++)
        {
            if(help_taken[i]=="50/50" || help_taken[i]=="Hint"){
                marks_awarded[i]/=2;
            }
        }

        var temparray= document.getElementsByClassName("marks_awarded");
            for(i=0;i<5;i++)
            {
                temparray[i].innerHTML=marks_awarded[i];
            }
        
        for(i=0;i<5;i++)
        {
            sum+=marks_awarded[i];
        }

        document.getElementById("total_marks").innerHTML="Total marks is "+sum+" out of 20";
    }

    questionNo++;

}