
//switching to the english version, might change the structure later
story = english;

let chapterIndexes = [];
chapterIndexes.push(0);
let chapterIndex = 0;
let nextChapterIndexCaseA,nextChapterIndexCaseB,nextChapterIndexCaseC,nextChapterIndexCaseD;
let lastChoice = 0;
let oA = document.getElementById("optionA");
let oB = document.getElementById("optionB");
let oC = document.getElementById("optionC");
let oD = document.getElementById("optionD");

oA.addEventListener("click", optionA);
oB.addEventListener("click", optionB);
oC.addEventListener("click", optionC);
oD.addEventListener("click", optionD);

initVisuals();
loadNewChapter();

console.log(story);//story

function optionA() {
  //  alert("a");
    chapterIndexes.push(nextChapterIndexCaseA);
    lastChoice = 0;
    chapterIndex = nextChapterIndexCaseA;
    loadNewChapter();
}

function optionB() {
 //   alert("b");
    chapterIndexes.push(nextChapterIndexCaseB);
    lastChoice = 1;
    chapterIndex = nextChapterIndexCaseB;
    loadNewChapter();
}

function optionC() {
  //  alert("c");
    chapterIndexes.push(nextChapterIndexCaseC);
    lastChoice = 2;
    chapterIndex = nextChapterIndexCaseC;
    loadNewChapter();
}

function optionD() {
   // alert("d");
    chapterIndexes.push(nextChapterIndexCaseD);
    lastChoice = 3;
    chapterIndex = nextChapterIndexCaseD;
    loadNewChapter();
}

function showIntro() {
    if (story.chapters[chapterIndex].chapter.intro) {
        document.getElementById("chapterTitle").innerHTML = story.chapters[chapterIndex].chapter.intro.title;
        document.getElementById("chapterLegend").innerHTML = story.chapters[chapterIndex].chapter.intro.legend;
        document.getElementById("overlay").classList.add("animation");
        setTimeout(()=>{document.getElementById("overlay").classList.remove("animation")}, 3990);
    }
}

function initVisuals() {
    let backgroundElement = document.getElementById("parallaxBackground");
    for (let i=5; i>=0; i--) {
        let newLayer = document.createElement("div");
        newLayer.setAttribute("class","parallaxLayer");
        newLayer.style.backgroundImage = "url(imgs/parts/landscape_000" + i + ".png)";
        backgroundElement.appendChild(newLayer);
    }
}

function loadNewChapter() { 
    oA.style.display = "none";
    oB.style.display = "none";
    oC.style.display = "none";
    oD.style.display = "none";
 
    document.getElementById("story1").innerHTML = story.chapters[chapterIndex].chapter.chapterDescription;
    let options = story.chapters[chapterIndex].chapter.options;
    
    showIntro();

    for (i = 0; i < options.length; i++) {
        
        if (options[i].option == 'A') {
            oA.style.display = "flex";
            oA.innerHTML = options[i].optionDescription;
            nextChapterIndexCaseA = options[i].nextChapterIndex; 
        } 

        if (options[i].option == 'B') {
            oB.style.display = "flex";
            oB.innerHTML = options[i].optionDescription;
            nextChapterIndexCaseB = options[i].nextChapterIndex; 
        }

        if (options[i].option == 'C') {
            oC.style.display = "flex";
            oC.innerHTML = options[i].optionDescription;
            nextChapterIndexCaseC = options[i].nextChapterIndex;
        }

        if (options[i].option == 'D') {
            oD.style.display = "flex";
            oD.innerHTML = options[i].optionDescription;
            nextChapterIndexCaseD = options[i].nextChapterIndex;
        } 
    }

}