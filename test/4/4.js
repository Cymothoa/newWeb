// let btn = document.querySelector(".btn");
// // console.log(btn);
// let write = document.getElementById("write").value;
// console.log(write);
// let messageDisplay = document.querySelector(".messageDisplay");
// let defualt = document.querySelector(".defualt");

// btn.onclick = function(){
//     defualt.style.display = 'none';
//     let news = document.createElement("news");
//     news.innerHTML ='<li>'+ write + '</li>';
//     console.log(news);
//     messageDisplay.appendChild(news);
// }

var app = new Vue({
    el:"#app",
    data:{
        textSimple:'',
        textList:[],
        // len:'',
    },
    computed:{
        len:function(){
            return this.textSimple.length;
        }
    },
    methods:{
        addMessage(){
            this.textList.push(this.textSimple);
        },
        deleteMessage(){
            this.textList.pop(this.textSimple);
        },
    },
})