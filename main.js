"use strict";

{
  const ROOT = document.documentElement;
  const BUTTON = document.querySelector(".button");
  const RESULT = document.querySelector(".result");

  const FORTUNE_LIST = [["おちんちん！！", "yellow"],
                        ["ちんこ", "orange"],
                        ["ちんちん", "pink"],
                        ["ちん", "green"],
                        ["たま", "blue"],
                        ["きんたま", "white"],
                        ["おきんたま", "gray"]];

  BUTTON.addEventListener("click",()=>{
    let _randNum = Math.floor(Math.random()*FORTUNE_LIST.length);

    ROOT.style.setProperty("--result-color",FORTUNE_LIST[_randNum][1]);
    RESULT.textContent = FORTUNE_LIST[_randNum][0];

    // CSS変数の値の取得
    console.log(getComputedStyle(ROOT).getPropertyValue("--result-color"));
  });
}
