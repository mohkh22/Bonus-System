let cover = document.getElementById('cover');
let add = document.getElementById('add');
let details = document.getElementById('detail');
let table = document.getElementById('tdetail');
let btnadd = document.getElementById('addbonus');
let textbonus = document.getElementById('textbonus');
const student = document.getElementById('studendlist');
let btnparant = ""; 

if(localStorage.getItem('studentlist') == null){
  // let student = table.children; 
  localStorage.setItem('studentlist',student.innerHTML);
}else{
  student.innerHTML = localStorage.getItem('studentlist');
  
}



function addbonus(btn){
  btnparant = btn; 
  cover.style.display = 'block';
  add.style.display = 'block';
}


function detail(btn){
    let el = btn.parentNode.parentNode;
    table.innerHTML = `
                <tr>
                    <th>Name </th>
                     <td>${el.children[0].innerHTML}</td>
                </tr>
                <tr>
                    <th>Attendance rate </th>
                    <td>${el.children[1].innerHTML}</td>
                </tr>
                <tr>
                    <th>Midterm grade </th>
                    <td>${el.children[2].innerHTML}</td>
                </tr>
                <tr>
                    <th>Final grade </th>
                    <td>${el.children[3].innerHTML}</td>
                </tr>
                <tr>
                    <th>Average tasks grade </th>
                    <td>${el.children[4].innerHTML}</td>
                </tr>
                <tr>
                    <th>Subtotal grades </th>
                    <td>${el.children[5].innerHTML}</td>
                </tr>
                <tr>
                    <th>Bonus </th>
                    <td>${el.children[6].innerHTML}</td>
                </tr>
                <tr class="pass">
                    <th>Total grades </th>
                    <td id="total">${el.children[7].innerHTML}</td>
                </tr>           
    `;
 grade(btn); 
  cover.style.display = 'block';
  details.style.display = 'block';
  
}

function grade(btn){
    let el = document.getElementById('total');
    if(+el.innerHTML >= 60 && +el.innerHTML < 90){
      el.classList.add('pass');
    }else if(+el.innerHTML >= 90 )
    {
      el.classList.add('gold');
    }else{
      el.classList.add('fail');
    }
}

btnadd.addEventListener('click',()=>{
  let total = btnparant.parentNode.parentNode.children[7];
   let bonus = btnparant.parentNode.parentNode.children[6];
   if(textbonus.value === '' || textbonus.value == null || parseInt(textbonus.value)<0)
   {
    alert('Please enter a Correct value');
   }else{
       let sum = parseInt(btnparant.parentNode.parentNode.children[5].innerHTML) + parseInt(textbonus.value);
       if(sum > 100){
         alert('Please enter a bonus which Total grade is less than 100');
       }
       else{
        
           bonus.innerHTML = textbonus.value;
           total.innerHTML = sum;
          cover.style.display = 'none';
          add.style.display = 'none';
             localStorage.setItem('studentlist',student.innerHTML);


       }
   }


}); 

document.getElementById("cl").addEventListener('click',close);
document.getElementById("cls").addEventListener('click',close);



function close(){
  cover.style.display = "none";
  add.style.display = 'none';
  details.style.display = "none";
}
