let input=document.getElementById('inp')
let word=document.getElementById('word')
let btn=document.getElementById('btn')
let result=document.querySelector('#last-result span')

let list=[
    'kareem',
    'mohamed',
    'ali',
    'cat',
    'car',
    'bag',
    'dog',
    'what',
    'good',
    'nice',
    'awad',
    'easy',
    'hard',
    'plante',
    'popcorn',
    'correct',
    'answer',
    'right',
    'sly',
    'lion',
    'cool',
    'hangry',
    'angry',
    'index',
    'sort',
    'kotlin',
    'index',
    'style',
    'code',
    'line',
    'lord',
    'go',
    'mouse',
    'text',
    'script',
    'python',
    'java',
    'yes',
    'no',
]

let id;
let time=0
let count=0
let get=localStorage.getItem('high-result');

if(!get){
    localStorage.setItem('high-result',0)
}else{
    result.innerHTML=`${get}W/M`
}


word.innerHTML=list[0]

input.setAttribute('maxlength',list[0].length)

btn.onclick=()=>{
    input.removeAttribute('disabled')
    input.focus()
    btn.remove()
    id=setInterval(timeFunc,1000)
}

function timeFunc(){
    time+=1;
    if(time==60){
        clearInterval(id)
        alert(`Your speed is ${count}W/M`)
        localStorage.setItem('high-result',get<count?count:get)
        window.location.reload()
    }
}



input.onkeyup=()=>{
        if (word.innerHTML.length==input.value.length){
            if(word.innerHTML==input.value){
                count+=1
                console.log(count);
            }

            word.innerHTML=list[list.indexOf(word.innerHTML)+1]
            input.value=''
            input.setAttribute('maxlength',word.innerHTML.length)
        }

}

