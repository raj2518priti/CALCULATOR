let string="";
let button=document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=='='){
        // string=  string+ e.target.innerHTML;
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='clr'){
        string="";
        document.querySelector('input').value=string;
    }
        else if(e.target.innerHTML=='sqrt'){
            string=Math.sqrt(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='sin'){
            string=Math.sin(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='cos'){
            string=Math.cos(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="back"){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;

        }
        
        else {
            string=  string+ e.target.innerHTML
        document.querySelector('input').value=string;
        }

    })
})
