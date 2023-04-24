button();
function button(params) {  
    const $dropdownButton = document.getElementsByClassName('dropdown-button');
    const $submenuWrap = document.getElementsByClassName('submenu-wrap');
    
    for (let i = 0; i < $dropdownButton.length; i++) {
        
        $dropdownButton[i].addEventListener('click', (e)=>{
            // 버튼 클릭 시 버튼 모양이 바뀌는 이벤트와, 아코디언 메뉴가 나오는 이벤트 발생
            if ($dropdownButton[i].classList.contains('dropdown-icon-down')) {
                $dropdownButton[i].classList.remove('dropdown-icon-down');
                $dropdownButton[i].classList.add('dropdown-icon-up');
<<<<<<< HEAD
                $submenuWrap[0].classList.remove('display');
                gsap.to($submenuWrap[0], {duration:0.5, ease:'power1.out'})
=======
                $submenuWrap[i].classList.add('display')
>>>>>>> 7bb2c9c1c19c679978c6b201b6a1de6704485a80
            }
            else{
                $dropdownButton[i].classList.add('dropdown-icon-down');
                $dropdownButton[i].classList.remove('dropdown-icon-up');
<<<<<<< HEAD
                $submenuWrap[0].classList.add('display');
                gsap.to($submenuWrap[0], {duration:0.5, ease:'power1.out'})
=======
                $submenuWrap[i].classList.remove('display')
>>>>>>> 7bb2c9c1c19c679978c6b201b6a1de6704485a80
            }
            // i번째 이외의 다른 버튼을 눌렀을 때, 버튼 모양을 바꿔주는 이벤트
            for (let j = 0; j < $dropdownButton.length; j++) {
                if (j !== i) {
                    $dropdownButton[j].classList.add('dropdown-icon-down');
                    $dropdownButton[j].classList.remove('dropdown-icon-up');
                }
                
            }
        })
    }
}

