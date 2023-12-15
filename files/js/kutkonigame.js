
        var kutkonigame = {
            willkutkonimove: false,
            objects: {
                kutkoni: document.getElementById("kutkoni"),
                yongjang: document.getElementById("yongjang"),
                weapon: document.getElementById("m1911pistolgr"),
                weaponparts: {
                    slide: document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0],
                    frame: document.getElementById("m1911pistolgr").getElementsByClassName("frame_1")[0],
                    hammer: document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0],
                    magazine:document.getElementById("m1911pistolgr").getElementsByClassName("magazine")[0],
                    muzzleflash: document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0],
                    cartridge: document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0],
                    barrel: document.getElementById("m1911pistolgr").getElementsByClassName("frame_2")[0],
                },
            },
            start(callback){
                if (this.willkutkonimove == false){
                    this.willkutkonimove = true;
                    document.getElementById("startBtn").innerHTML="게임 끝내기";
                } else {
                    this.willkutkonimove=false;
                    
                    document.getElementById("startBtn").innerHTML="플레이하기";
                }
                if (this.gameoverv == false) {
                    this.gameoverv = true;
                } else {
                    this.gameoverv = false;
                }
                callback(this);
            },
            kutkonimovepr(to,speed) {
                this.objects.kutkoni.style.top = (`calc(var(--displaywidth) * ${to.y * speed})`);
            },
            msgs:{
                yongjang:`<p><span style="font-size: 200%;">메롱 날 맞힐수 있냐 병☆신아 조까라 으하하하하</span><span>-굳건이-</span></p>`,
                pok4:`<p><img src="./files/img/fuckedkutkoni.png" width="300" style="background:url('./files/img/pokpal.gif')"><br> <span style="font-size:250%;">굳건이 총맞고 폭☆4</span></p>`,
            },
            kutkonimove2(from, plus) {
                if (this.willkutkonimove == true) {
                    if (from.x + plus.x < 0 || from.y + plus.y < 0) {
                        if (from.x + plus.x < 0 && from.y + plus.y >= 0) {

                            function myfunction(timestamp) { kutkonigame.kutkonimovepr({ x: 0, y: from.y + plus.y }) }
                            requestAnimationFrame(myfunction);
                        } else if (from.x + plus.x < 0 && from.y + plus.y < 0) {

                            function myfunction(timestamp) {  kutkonigame.kutkonimovepr({ x: 0, y: 0 }) }
                            requestAnimationFrame(myfunction);
                        } if (from.x + plus.x >= 0 && from.y + plus.y < 0) {

                            function myfunction(timestamp) {  kutkonigame.kutkonimovepr({ x: from.x + plus.x, y: 0 }) }
                            requestAnimationFrame(myfunction);
                        }
                    } if (from.x + plus.x > window.innerWidth || from.y + plus.y > window.innerHeight) {
                        if (from.x + plus.x > window.innerWidth && from.y + plus.y <= window.innerHeight) {

                            function myfunction(timestamp) { kutkonigame.kutkonimovepr({ x: 0, y: from.y + plus.y }) };

                            requestAnimationFrame(myfunction);
                        } else if (from.x + plus.x > window.innerWidth && from.y + plus.y > window.innerHeight) {

                            function myfunction(timestamp) {kutkonigame.kutkonimovepr({ x: 0, y: 0 }) };
                            requestAnimationFrame(myfunction);
                        } if (from.x + plus.x <= window.innerWidth && from.y + plus.y > window.innerHeight) {

                            function myfunction(timestamp) {  kutkonigame.kutkonimovepr({ x: from.x + plus.x, y: 0 }) }
                            requestAnimationFrame(myfunction);
                        }
                    } else {
                        function myfunction(timestamp) {  kutkonigame.kutkonimovepr({ x: from.x + plus.x, y: from.x + plus.y }) };
                        requestAnimationFrame(myfunction);
                    }
                    return true;
                } else {
                    return false;
                }
            },
            panghyang:-1,
            numbers:{
                x:0,
                y:0,
            },
            returnposnumber(timestamp,xy){
                this.numbers.x+=this.panghyang;
                this.numbers.y+=this.panghyang;
                return { x: (xy.x + this.panghyang-20), y:(xy.y + this.panghyang-20) };
            },
            levels:{
                0:{
                    levelname:"난이도0",
                    desc:`속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값의 10분의1만큼 바뀌는 속도로, 매우 느림. 이 난이도는 정말정말 쉽게 깰수 있다.`,
                    speed: 1 / 10,
                },
                1:{
                    levelname: "난이도1",
                    desc: `속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값의 8분의1만큼 바뀌는 속도로, 느림. 이 난이도는 정말 쉽게 깰수 있다.`,
                    speed: 1 / 8,
                },
                2:{
                    levelname: "난이도2",
                    desc: `속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값의 5분의1만큼 바뀌는 속도로,약간 느림.  이 난이도는 꽤 쉽게 깰수 있다.`,
                    speed: 1 / 5,
                },
                3:{
                    levelname: "난이도3",
                    desc: `속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값의 4분의1만큼 바뀌는 속도로, 보통. 이 난이도는 대충 쉽게 깰수 있을것이다.`,
                    speed:1 / 4,
                },
                4:{
                    levelname: "난이도4",
                    desc: `속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값의 2분의1만큼 바뀌는 속도로, 약간 빠름. 이 난이도는 그래도 깨는데 아무리 늦어도 2분이상의 노력이 필요하지 않을것이다..`,
                    speed:1 / 2,
                },
                5:{
                    levelname: "난이도5",
                    desc: `속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값만큼 바뀌는 속도로, 빠름. 아주 어렵다. 이 난이도는 힘들게 깰수 있다.`,
                    speed:1,
                },
                6:{
                    levelname: "난이도 굳건이가 우사인볼트가 된 난이도",
                    desc: `속도는 css스타일로 굳건이 위치가 바뀔때 원래 정해진 값의 2배만큼 바뀌는 속도로, 매우 빠름. 이 난이도까지 깨고 누구나 만렙을 달성할수 있다는건 보장 못하지만,우사인볼트의 속도를 체감할수 있다는건 믿을수 있게 보장한다.`,
                    speed:2,
                }
            },
            levelnow:0,
            timeslll:0,
            kutkonimove(from, plus) {
                    function myfunction(timestamp){
                        if (kutkonigame.willkutkonimove) {
                            
                        if (Math.floor(kutkonigame.timeslll) % 120 == 0) {
                            kutkonigame.panghyang = 1;
                        }
                        if (Math.floor(kutkonigame.timeslll) % 120 == 60) {
                            kutkonigame.panghyang = -1;
                        }
                        kutkonigame.kutkonimovepr(kutkonigame.returnposnumber(timestamp,{x:kutkonigame.numbers.x,y:kutkonigame.numbers.y}), kutkonigame.levels[kutkonigame.levelnow].speed);
                            requestAnimationFrame(myfunction);
                        }
                        kutkonigame.timeslll+=1;
                    }
                    requestAnimationFrame(myfunction);
                
            },
            rounds:7,
            play() {
                kutkonigame.kutkonimove({ x: this.objects.kutkoni.style.left.replace(/calc\(var\(--displaywidth\) \* (.*)\)/gi, Number((/$1/ + "").replace(`/`, ``).replace(`/`, ``))), y: this.objects.kutkoni.style.top.replace(/calc\(var\(--displaywidth\) \* (.*)\)/gi, Number((/$1/ + "").replace(`/`, ``).replace(`/`, ``))), }, { x: 5, y: 5 });
            },
            kutkonpok4(param1){
                this.alimchang(this.msgs["pok4"] + param1);
            },
            alimchang(msg){
                document.getElementsByClassName("gameovermodalbg")[0].style.display="block";
                document.getElementById("yongjang").innerHTML = msg;
            },
            gameoverv:true,
            firing(){
                if (this.gameoverv == false){
                        
                        if (this.objects.weapon.offsetTop >= (this.objects.kutkoni.offsetTop) && (this.objects.kutkoni.offsetTop + (this.objects.kutkoni.offsetHeight)) >= (this.objects.weapon.offsetTop+(this.objects.weapon.offsetHeight))) {
                            console.log(this.objects.kutkoni.offsetTop);
                            kutkonigame.objects.kutkoni.src = `./files/img/fuckedkutkoni.png`
                            kutkonigame.objects.kutkoni.style.backgroundImage = `url('./files/img/pokpal.gif')`;
                            this.gameover(true);
                            if (this.levelnow < 6)this.levelnow+=1;
                            document.getElementById("leveldiv").innerHTML = kutkonigame.levels[kutkonigame.levelnow].levelname;
                            document.getElementById("leveldescdiv").innerHTML = kutkonigame.levels[kutkonigame.levelnow].desc;
                        } else {
                            var next000 = (this.levelnow < 6) ? ` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"` : ``;
                            this.alimchang(this.msgs["yongjang"] + "잘못맞혔네? 입대야!!! 하하하"+ `<p class="gameover"><span>You lost...</span><br><span ${next000}>play again | your level:${this.levels[this.levelnow].levelname}</span></p>`);
                            this.gameover(false);
                        }
                        document.getElementById("startBtn").innerHTML="게임 시작하기";

                    }
                
                
                
            },
            gameover(isitthatyouwon){
                if (!isitthatyouwon){}
                else {
                    if(isitthatyouwon ==true){
                        var gameovertext = (this.levelnow < 6)?"NEXT":"GAME OVER";
                        var next000 = (this.levelnow<6)?` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"`:``;
                        this.kutkonpok4(`<p class="gameover"><span>You won!!! | your level:${this.levels[this.levelnow].levelname}</span><br><span ${next000}>${gameovertext}</span></p>`);
                    } else {
                    }
                    
                    document.getElementsByClassName("gameovermodalbg")[0].style.display = "block";
                    
                }
                this.gameoverv=true;
            },
            inloadingtomagazine:false,
            weaponloading(callback){
                this.inloadingtomagazine=true;
                window.setTimeout(function(){
                    kutkonigame.objects.weaponparts.magazine.style.animation="loadingtomagazine 0.95s 1";
                },50);
                window.setTimeout(function(){
                    kutkonigame.objects.weaponparts.magazine.src="./files/img/m1911_magazine_loaded.png";
                },400);
                window.setTimeout(function(){
                    kutkonigame.objects.weaponparts.magazine.style.animation="";
                },1500);
                window.setTimeout(function () {

                    document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "loadinground 0.5s 1";
                    document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "hammeranie 0.5s 1";
                }, 1525);
                window.setTimeout(function () {

                    document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "";

                    document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "";
                    callback(kutkonigame);
                    kutkonigame.inloadingtomagazine=false;
                }, 2125);
            },

        }
        $("closingmodal").click(function(e){
            $("#yongjang").html("");
        });
        function selectanel(el){
            
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(el);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        document.getElementById("m1911pistolgr").onclick = function(e){
            if (kutkonigame.inloadingtomagazine==false){

                if (kutkonigame.rounds > 0) {
                    kutkonigame.rounds -= 1;
                    kutkonigame.inloadingtomagazine=true;
                    if (kutkonigame.rounds <= 0) {
                        kutkonigame.objects.weaponparts.magazine.src = "./files/img/m1911_magazine.png";
                    }
                    kutkonigame.willkutkonimove = false;
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.animation = "muzzleflash 0.1425s 1";
                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.display = "block";
                    }, 17.5);
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "loadinground 0.25s 1";
                        document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "hammeranie 0.25s 1";
                    }, 25);


                    window.setTimeout(function () {
                        document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0].style.animation = "cartridge 0.5s 1";
                    }, 140);
                    //슬라이드가 완전히 뒤로 후퇴했을때는 loadinground 애니메이션의 정확히 중간이니까 0.25초동안 슬라이드가 움직인다고 했고,슬라이드 장전 모션은 뒤로 25밀리초부터 시작하니까 0.25초의 반이 125밀리초이므로 정확하겐 150을 써놓아야 하지만,탄피가 약간 늦으므로 10밀리초 땡겨서 140밀리초에 작동.
                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.display = "none";
                        document.getElementById("m1911pistolgr").getElementsByClassName("gunflash")[0].style.animation = "";
                    }, 150);
                    //얘는 정확히 125+25해서 150밀리초에 끝나야함.

                    window.setTimeout(function () {

                        document.getElementById("m1911pistolgr").getElementsByClassName("slide")[0].style.animation = "";

                        document.getElementById("m1911pistolgr").getElementsByClassName("hammer")[0].style.animation = "";
                        document.getElementById("m1911pistolgr").getElementsByClassName("shell")[0].style.animation = "";
                        kutkonigame.firing();
                        kutkonigame.inloadingtomagazine=false;
                    }, 625);
                    kutkonigame.objects.weapon.focus();

                } else {
                    kutkonigame.objects.weapon.blur();
                    var reloadingrounds = confirm("콜트 1911의 7발탄창 안에 든 총알을 다 썼습니다. 재장전하시겠습니까?");
                    if (reloadingrounds == true) {
                        kutkonigame.weaponloading(function (param1) { param1.rounds = 7; });

                    }
                    kutkonigame.objects.weapon.blur();
                }
            }
            
        }
        
        window.addEventListener("resize",function(e){
            document.querySelector(':root').style.setProperty("--displaywidth", window.innerWidth / 10 * 0.75 + "px");
        });
        window.addEventListener("load",function(e){
            
            document.querySelector(':root').style.setProperty("--displaywidth", window.innerWidth / 10 * 0.75 + "px");
            document.getElementById("leveldiv").innerHTML=kutkonigame.levels[kutkonigame.levelnow].levelname;
            document.getElementById("leveldescdiv").innerHTML=kutkonigame.levels[kutkonigame.levelnow].desc;
        });
        kutkonigame.objects.weapon.addEventListener("focus", function(e0){
            document.activeElement.addEventListener("keyup", function (e) {
                if (e.keyCode == 13 || e.keyCode == 32) {
                    e.target.click();
                }
            });
        });
