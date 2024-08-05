

const w_btn=document.getElementById('m_w_btn');
const d_btn=document.getElementById('m_d_btn');
const b_btn=document.getElementById('m_b_btn');
// const l_btn=document.getElementById('m_l_btn');

const w_div=document.getElementById('with');
const d_div=document.getElementById('depo');
const b_div=document.getElementById('bal');
// const l_div=document.getElementById('log');


let bal=0;
// let log=[];

function show_w(){
    d_div.style.display = "none";
    w_div.style.display="block";
    b_div.style.display = "none";
    // l_div.style.display = "none";
    w_btn.style.backgroundColor= "pink";
    d_btn.style.backgroundColor= "white";
    b_btn.style.backgroundColor= "white";
    // l_btn.style.backgroundColor= "white";
}
function show_d(){
    w_div.style.display = "none";
    d_div.style.display="block";
    b_div.style.display = "none";
    // l_div.style.display = "none";
    d_btn.style.backgroundColor= "pink";
    w_btn.style.backgroundColor= "white";
    b_btn.style.backgroundColor= "white";
    // l_btn.style.backgroundColor= "white";
}
function show_b(){
    d_div.style.display = "none";
    b_div.style.display="block";
    w_div.style.display = "none";
    // l_div.style.display = "none";
    b_btn.style.backgroundColor= "pink";
    w_btn.style.backgroundColor= "white";
    d_btn.style.backgroundColor= "white";
    // l_btn.style.backgroundColor= "white";
    document.getElementById('show_bal').innerHTML=bal+" RS";
    console.log("balance : "+bal)
}
// function show_l(){
//     w_div.style.display = "none";
//     l_div.style.display="block";
//     b_div.style.display = "none";
//     d_div.style.display = "none";
//     l_btn.style.backgroundColor= "pink";
//     w_btn.style.backgroundColor= "white";
//     b_btn.style.backgroundColor= "white";
//     d_btn.style.backgroundColor= "white";
//     let p = document.getElementById('show_log');
//     for(let element of log){
//         console.log(element)
       
//         p.innerHTML=element+"<br>";
//     }
//     console.log(log);
// }

function deposit(){
    let i_depo=document.getElementById('i_depo').value;
    bal+=Number(i_depo);
    console.log("+"+i_depo);
    // log.unshift("+"+i_depo)
}

function withdraw(){
    let i_with=document.getElementById('i_with').value;
    if(bal<Number(i_with)){
        alert("Insufficient funds")
    }
    else{
        bal-=Number(i_with);
        console.log("-"+i_with);
        // log.unshift("-"+i_with)
    }
    
}