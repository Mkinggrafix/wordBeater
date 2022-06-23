// Available levels
let levels = {
    easy: 5,
    medium: 3,
    hard: 2

};

// To change level
let currentLevel = levels.easy;

// Global variable
let time = currentLevel,
    score = 0;

// Get Elements from the DOM
let randomWord = document.getElementById('word'),
    wordInput = document.getElementById('wordInput'),
    output = document.getElementById('output'),
    countDown = document.getElementById('countDown'),
    result = document.getElementById('score'),
    second = document.getElementById('second'),
    selectBox = document.getElementById('selectBox'),
    preScore = document.getElementById('highscore'),
    checkScore = document.getElementById('checkScore'),
    high_score = document.getElementById('high_score');

let words = [
   "achromatizes","achromatizing","achromats","achromic","achromous","achy","acicula","aciculae","acicular","aciculas","aciculate","aciculum","aciculums","acid","acidemia","acidemias","acidhead","acidheads","acidic","acidification","acidifications","acidified","acidifier","acidifiers","acidifies","acidify","acidifying","acidimeter","acidimeters","acidimetric","acidimetries","acidimetry","acidities","acidity","acidly","acidness","acidnesses","acidophil","acidophile","acidophiles","acidophilic","acidophils","acidoses","acidosis","acidotic","acids","acidulate","acidulated","acidulates","acidulating","acidulation","acidulations","acidulent","acidulous","aciduria","acidurias","acidy","acierate","acierated","acierates","acierating","aciform","acinar","acing","acini","acinic","aciniform","acinose","acinous","acinus","ackee","ackees","acknowledge","acknowledged","acknowledgedly","acknowledgement","acknowledges","acknowledging","acknowledgment","acknowledgments","aclinic","acmatic","acme","acmes","acmic","acne","acned","acnes","acnode","acnodes","acock","acoelomate","acoelomates","acoelous","acold","acolyte","acolytes","aconite","aconites","aconitic","aconitum","aconitums","acorn","acorned","acorns","acoustic","acoustical","acoustically","acoustician","acousticians","acoustics","acquaint","acquaintance","acquaintances","acquainted","acquainting","acquaints","acquest","acquests","acquiesce","acquiesced","acquiescence","acquiescences","acquiescent","acquiescently","acquiesces","acquiescing","acquirable","acquire","acquired","acquiree","acquirees","acquirement","acquirements","acquirer","acquirers","acquires","acquiring","acquisition","acquisitional","acquisitions","acquisitive","acquisitively","acquisitiveness","acquisitor","acquisitors","acquit","acquits","acquittal","acquittals","acquittance","acquittances","acquitted","acquitter","acquitters","acquitting","acrasia","acrasias","acrasin","acrasins","acre","acreage","acreages","acred","acres","acrid","acrider","acridest","acridine","acridines","acridities","acridity","acridly","acridness","acridnesses","acriflavine","acriflavines","acrimonies","acrimonious","acrimoniously","acrimoniousness","acrimony","acritarch","acritarchs","acritical","acrobat","acrobatic","acrobatically","acrobatics","acrobats","acrocentric","acrocentrics","acrodont","acrodonts","acrogen","acrogenic","acrogens","acrolect","acrolects","acrolein","acroleins","acrolith","acroliths","acromegalic","acromegalics","acromegalies","acromegaly","acromia","acromial","acromion","acronic","acronical","acronycal","acronym","acronymic","acronymically","acronyms","acropetal","acropetally","acrophobe","acrophobes","acrophobia","acrophobias","acropolis","acropolises","acrosomal","acrosome","acrosomes","acrospire","acrospires","across","acrostic","acrostical","acrostically","acrostics","acrotic","acrotism","acrotisms","acrylamide","acrylamides","acrylate","acrylates","acrylic","acrylics","acrylonitrile","acrylonitriles","act","acta","actabilities","actability","actable","acted","actin","actinal","actinally","acting","actings","actinia","actiniae","actinian","actinians","actinias","actinic","adaptiveness","adaptivenesses","adaptivities","adaptivity","adaptor","adaptors","adapts","adaxial","add","addable","addax","addaxes","added","addedly","addend","addenda","addends","addendum","addendums","adder","adders","addible","addict","addicted","addicting","addiction","addictions","addictive","addicts","adding","addition","additional","butylenes","butyls","butyral","butyraldehyde","butyraldehydes","butyrals","butyrate","butyrates","butyric","butyrin","butyrins","butyrophenone","butyrophenones","butyrous","butyryl","butyryls","buxom","buxomer","buxomest","buxomly","buxomness","buxomnesses","buy","buyable","buyback","buybacks","buyer","buyers","buying","buyoff","buyoffs","buyout","buyouts","buys","buzuki","buzukia","buzukis","buzz","buzzard","buzzards","buzzcut","buzzcuts","buzzed","buzzer","buzzers","buzzes","buzzing","buzzingly","buzzwig","buzzwigs","buzzword","buzzwords","bwana","bwanas","by","bycatch","bycatches","bye","byelaw","byelaws","byes","bygone","bygones","bylaw","bylaws","byline","bylined","byliner","byliners","bylines","bylining","byname","bynames","bypass","bypassed","bypasses","bypassing","bypast","bypath","bypaths","byplay","byplays","byproduct","byproducts","byre","byres","byrl","byrled","byrling","byrls","byrnie","byrnies","byroad","byroads","bys","byssal","byssi","byssinoses","byssinosis","byssus","byssuses","bystander","bystanders","bystreet","bystreets","bytalk","bytalks","byte","bytes","byway","byways","byword","bywords","bywork","byworks","byzant","byzantine","byzants","cab","cabal","cabala","cabalas","cabaletta","cabalettas","cabalette","cabalism","cabalisms","cabalist","cabalistic","cabalists","caballed","caballero","caballeros","caballing","cabals","cabana","cabanas","cabaret","cabarets","cabbage","cabbaged","cabbages","cabbageworm","cabbageworms","cabbagey","cabbaging","cabbagy","cabbala","cabbalah","cabbalahs","cabbalas","cabbalism","cabbalisms","cabbalist","cabbalists","cabbed","cabbie","cabbies","cabbing","cabby","cabdriver","cabdrivers","caber","cabernet","cabernets","cabers","cabestro","cabestros","cabezon","cabezone","cabezones","cabezons","cabildo","cabildos","cabin","cabined","cabinet","cabinetmaker","cabinetmakers","cabinetmaking","cabinetmakings","cabinetries","cabinetry","cabinets","cabinetwork","cabinetworks","cabining","cabinmate","cabinmates","cabins","cable","cablecast","cablecasted","cablecasting","cablecasts","cabled","cablegram","cablegrams","cabler","cablers","cables","cablet","cablets","cableway","cableways","cabling","cabman","cabmen","cabob","cabobs","caboched","cabochon","cabochons","cabomba","cabombas","caboodle","caboodles","caboose","cabooses","caboshed","cabotage","cabotages","cabresta","cabrestas","cabresto","cabrestos","cabretta","cabrettas","cabrilla","cabrillas","cabriole","cabrioles","cabriolet","cabriolets","cabs","cabstand","cabstands","caca","cacao","cacaos","cacas","cacciatore","cachalot","cachalots","cache","cachectic","cached","cachepot","cachepots","caches","cachet","cacheted","cacheting","cachets","cachexia","cachexias","cachexic","invisibility","invisible","invisibleness","invisiblenesses","invisibles","invisibly","invital","invitation","invitational","invitationals","invitations","invitatories","invitatory","invite","invited","invitee","invitees","inviter","inviters","invites","inviting","invitingly","invocate","invocated","invocates","invocating","invocation","invocational","invocations","invocatory","invoice","invoiced","invoices","invoicing","invoke","invoked","invoker","invokers","invokes","invoking","involucel","involucels","involucra","involucral","involucrate","involucre","involucres","involucrum","involuntarily","involuntariness","involuntary","involute","involuted","involutes","involuting","involution","yucky","yuga","yugas","yuk","yukked","yukkier","yukkiest","yukking","yukky","yuks","yulan","yulans","yule","yules","yuletide","yuletides","yum","yummier","yummies","yummiest","yumminess","yumminesses","yummy","yup","yupon","yupons","yuppie","yuppiedom","yuppiedoms","yuppieish","yuppies","yuppified","yuppifies","yuppify","yuppifying","yuppy","yups","yurt","yurta","yurts","yutz","yutzes","ywis","za","zabaglione","zabagliones","zabaione","zabaiones","zabajone","zabajones","zacaton","zacatons","zaddick","zaddik","zaddikim","zaffar","zaffars","zaffer","zaffers","zaffir","zaffirs","zaffre","zaffres","zaftig","zag","zagged","zagging","zags","zaibatsu","zaikai","zaikais","zaire","zaires","zamarra","zamarras","zamarro","zamarros","zamia","zamias","zamindar","zamindari","zamindaris","zamindars","zanana","zananas","wunderkinder","wurst","wursts","wurtzite","wurtzites","wurzel","wurzels","wushu","wuss","wusses","wussier","wussies","wussiest","wussy","wuther","wuthered","wuthering","wuthers","wyandotte","wyandottes","wych","wyches","wye","wyes","wyle","wyled","wyles","wyliecoat","wyliecoats","wyling","wyn","wynd","wynds","wynn","wynns","wyns","wyte","wyted","wytes","wyting","wyvern","wyverns","xanthan","xanthans","xanthate","xanthates","xanthein","xantheins","xanthene","xanthenes","xanthic","xanthin","xanthine","xanthines","xanthins","xanthoma","xanthomas","xanthomata","xanthone","xanthones","xanthophyll","xanthophylls","xanthous","xebec","xebecs","xenia","xenial","xenias","xenic","xenobiotic","xenobiotics","xenoblast","xenoblasts","xenocryst","xenocrysts","xenodiagnoses","xenodiagnosis","xenodiagnostic","xenogamies","xenogamy","xenogeneic","xenogenic","xenogenies","xenogeny","xenograft","xenografts","xenolith","xenolithic","xenoliths","xenon","xenons","xenophile","xenophiles","xenophobe","xenophobes","xenophobia","xenophobias","xenophobic","xenophobically","xenopus","xenopuses","xenotropic","xerarch","xeric","xerically","xeriscape","xeriscapes","xeroderma","xerodermae","xerodermas","xerographic","xerographically","xerographies","xerography","xerophile","xerophilies","xerophilous","xerophily","xerophthalmia","xerophthalmias","xerophthalmic","xerophyte","xerophytes","xerophytic",
];

// Add EventListener
window.addEventListener('load', init);
selectBox.addEventListener('change', selectLevel);
checkScore.addEventListener('click', showHighScore);

function init() {
    // Show second in the DOM
    second.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Match Word
    wordInput.addEventListener('input', startMatch);
    // Call time function
    setInterval(setCountDown, 1000);
};

// Select Level
function selectLevel() {
    if (selectBox.value == 'Easy') {
        currentLevel = levels.easy;
        second.innerHTML = currentLevel;
    }else if (selectBox.value == 'Medium') {
        currentLevel = levels.medium;
        second.innerHTML = currentLevel;
    }else {
        currentLevel = levels.hard;
        second.innerHTML = currentLevel;
    };
};

// Run selectLevel Function
selectLevel();

// Display random words
function showWord(words) {
    let randIndex = Math.floor(Math.random() * words.length);
    randomWord.innerHTML = words[randIndex];
};

// Start Match
function startMatch() {
    if (matchWord()) {
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
        store()
    };
    
    if (score < 0) {
        result.innerHTML = 0;
    }else {
        result.innerHTML = score;
    };
};

function store() {
    // console.log(score)
    saveScore();
}

function showHighScore() {
    high_score.classList.toggle('toggleScore')
}


function saveScore() {
    localStorage.setItem('highscore', score)
}

// Match Word
function matchWord() {
    if (wordInput.value == randomWord.innerText) {
        output.innerText = 'Correct!!!';
        wordInput.classList.remove('gameout');
        return true;
    }else {
        output.innerText = '';
        return false;
    };
};

// Set Time Function
function setCountDown() {
    if (time > 0) {
        time--;
        output.innerHTML = '';
        output.classList.remove('gameover');
    }else if(time == 0) {
        output.innerText = 'Game over!!!';
        output.classList.add('gameover');
        wordInput.classList.add('gameout');
        let localScore = localStorage.getItem('highscore');
        preScore.innerHTML = localScore;
        time = 0;
        score = -1;
    };
    countDown.innerHTML = time;
};