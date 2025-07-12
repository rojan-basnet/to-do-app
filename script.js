const button =document.getElementById('add');
const input=document.getElementById('input');
const container=document.querySelector('.container');


button.addEventListener('click',(event)=>{
    event.preventDefault()

    try{
        if(input.value){
            const addLiElement=document.createElement('div');
            const task=document.createElement('div')
            const removebtn=document.createElement('button');
            const notcompImg=document.getElementById('notcompImg');
            const notcompImgClone = notcompImg.cloneNode(true);
            const compImg=document.getElementById('compImg');
            const compImgClone= compImg.cloneNode(true);

            task.innerText=input.value;  
            removebtn.innerHTML='<i class="fa-solid fa-trash"></i>';

            container.appendChild(addLiElement);
            addLiElement.classList.add('forliele');
            
            task.style.padding='10px';
            addLiElement.appendChild(task);
            addLiElement.appendChild(removebtn);
            addLiElement.prepend(notcompImgClone);
            notcompImgClone.style.display='inline';
            compImgClone.style.display='inline';

            notcompImgClone.addEventListener('click',()=>{
                addLiElement.removeChild(notcompImgClone);
                addLiElement.prepend(compImgClone);
                task.style.textDecoration="line-through";
                task.style.color="white";

            })

            compImgClone.addEventListener('click',()=>{
                addLiElement.removeChild(compImgClone);
                addLiElement.prepend(notcompImgClone);
                task.style.textDecoration="none";  
                task.style.color="black";

            })

            input.value='';

            removebtn.classList.add('trash')
            removebtn.addEventListener('click',()=>{
            container.removeChild(addLiElement);


    })
        }
        else{
            throw new Error('Please enter somthing!!!')
        }
    }
    catch(error){
        console.error(error)
        window.alert(error)
    }


})

