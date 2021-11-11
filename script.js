let array = [];
let result_1 = document.getElementById('result_1');
let result_2 = document.getElementById('result_2');
let result_3 = document.getElementById('result_3');
let result_4 = document.getElementById('result_4');
let result_5 = document.getElementById('result_5');
let result_6 = document.getElementById('result_6');

 // Nhập
function enter()
{
    let input = parseInt(document.getElementById('input').value);
    if(!input)
    {
        alert("Vui lòng nhập số");
    }
    array.push(input);
    document.getElementById('input').value = '';

    // Color
    let length = (input + '').length;
    let color = '#';
    let span = document.createElement('span');
    result_6.appendChild(span);

    // Length = 6: #0000xx    
    if(length == 6)
    {
         color += input;
         result_6.style.background = color;
    }
    // Length < 6: #xxxxxx   
    else if(length < 6)
    {
        for(let i = 0; i < 6 - length; i++)
        {
             color += '0';
        }
        color += input;
        result_6.style.background = color;
    }
    span.innerHTML = color;
    setTimeout( e=> { span.remove() },3000);
}

 // Số nguyên tố    
function songuyento(input)
    {
       let isPrimeNumber = true;
       if(input < 2)
       {
           isPrimeNumber = false;
       }
       else
       {
           for(let i = 2; i < input -1; i++)
           {
               if(input % i == 0)
               {
                   isPrimeNumber = false;
               }
           }
       }
       if(isPrimeNumber == true)
       {
           return true;
       }
       else
       {
           return false;
       }
    }

 // Result    
function result()
{
    let even = `Số chẵn: `;
    result_1.innerHTML = even;
    let odd = `Số lẻ: `
    result_2.innerHTML = odd;
    let sum = 0;
    let max = array[0];
    let nguyento = `Số nguyên tố: `;
    result_5.innerHTML = nguyento;

    for(let i = 0; i < array.length; i++)
    {

        // Chẵn
        if(array[i] % 2 == 0)
        {
            result_1.innerHTML += `${array[i]} \t`;
        }

        // Lẻ    
        else if(array[i] % 2 != 0)
        {
            result_2.innerHTML += `${array[i]} \t`;
        }

        // Tổng    
        sum += array[i];
        result_3.innerHTML = `Tổng các phần tử là: ${sum}`;

        // Max    
        if(max < array[i])
        {
            max = array[i];
        }
        result_4.innerHTML = `Số lớn nhất là: ${max}`;
        // Số nguyên tố 
        if(songuyento(array[i]))
        {
            result_5.innerHTML += `${array[i]} \t`
        }
    }
}

// Enter key
document.addEventListener('keypress', event =>{
     if(event.keyCode === 13 || event.which === 13)
     {
         document.getElementById('button').click();
         event.preventDefault();
         return false;
     }
 });