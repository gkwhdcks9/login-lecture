"use strict";

const id = document.querySelector("#id"), // 태그에 id = "identity"에서 identity를 가져와 달라.
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },//내가 요청/전달하는 데이터가 json데이터라는걸 명시해야함
        body: JSON.stringify(req)//body를 통해서 데이터 전달할 때는 http메서드 중 POST를 써서 전달
    })
    .then((res) => res.json())
    .then((res) => console.log(res));
    
}