// 1초마다 현재시간 출력
const clock = document.querySelector("#clock");

function getClock(){

    let date = new Date();

    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    clock.innerHTML = `${hour}:${minutes}:${seconds}`;

    return `${hour}:${minutes}:${seconds}`;
}


setInterval(function(){
    clock.innerHTML = getClock();
}, 1000);

clock.innerHTML = getClock();


//////////////////////////////////////////////////////////////////////////////


// 할일 입력 후 => 추가 버튼 누르면 리스트에 출력
const todoForm = document.querySelector("#todoform");
todoForm.addEventListener("submit", todoAdd);

// let result = document.querySelector("#result");
// let checkBox = document.querySelectorAll("#todolist input[type='checkbox']");

function todoAdd(e){

    e.preventDefault();

    const todoValue = todoForm.firstElementChild.value;

    const li = document.createElement("li");

    // li에 추가할 내용 => 체크박스, 텍스트, 버튼
    const check = document.createElement("input");
    check.type = "checkbox";

    const text = document.createTextNode(todoValue);

    const button = document.createElement("button");
    button.innerHTML = "X";

    // 시간추가 => span

    // li태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(button);

    document.querySelector("#todolist").appendChild(li);

    // 투두 입력후 빈칸
    todoForm.firstElementChild.value = "";


    // check 이벤트 추가
    check.addEventListener("click", todoCheck);

    // delete 이벤트 추가
    button.addEventListener("click", todoDelete);


    const result = document.querySelector("#result");
    const checkBox = document.querySelectorAll("#todolist input[type='checkbox']");

    checkedList();

};

// todoAdd();


// 리스트 체크하면 그레이로
function todoCheck(e){
    const check = e.target;
    const li = check.parentNode;

    if(check.checked){
        li.style.color = "olivedrab";
        // li.style.opacity = "0.3";
    }else{
        li.style.color = "";
    }
    checkedList();
};


// 삭제버튼
function todoDelete(e){
    const button = e.target;
    const li =  button.parentNode;
    li.remove();
    checkedList();
}



// 체크박스를 체크하면 체크된 박스 수로 출력하기
function checkedList(){

    const result = document.querySelector("#result");
    const checkBox = document.querySelectorAll("#todolist input[type='checkbox']");

    const checked = document.querySelectorAll("#todolist input[type='checkbox']:checked");

    result.innerHTML = `전체 할 일 : ${checkBox.length} / 완료한 일 : ${checked.length}`;
    
}




