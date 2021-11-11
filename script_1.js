let array = [];
let array_result = document.getElementById('result');
let max_result = document.getElementById('max');
let min_result = document.getElementById('min');
let sum_result = document.getElementById('sum');

// Random
function random()
{
    let input = parseInt(document.getElementById('input').value);
    for(let i = 0; i < input; i++)
    {
        let count = 0;
        let x = Math.floor(Math.random() * 20 + 1);
        for(let j = 0; j < x; j++)
        {
            count++;
        }
        array.push(count);
    }
    // Print 
    let max = array[0];
    let min = array[0];
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        array_result.value += `${array[i]}\t`;

        if(max < array[i])
        {
            max = array[i];
        }
        if(min > array[i])
        {
            min = array[i];
        }
        max_result.value = max;
        min_result.value = min;
        sum += array[i];
        sum_result.value = sum;
    }
}

// Enter key
document.addEventListener('keypress', event =>{
    if(event.keyCode === 13 || event.which === 13)
    {
        document.getElementById('generate').click();
        event.preventDefault();
        return false;
    }
});