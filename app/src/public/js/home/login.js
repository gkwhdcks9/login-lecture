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
    console.log(req);
    
}