const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const score = document.querySelector('.score')

let tanahSebelumnya
let selesai
let skor

function tanahRandom(tanah){
    let angka = Math.floor(Math.random() * tanah.length)
    if(angka === tanahSebelumnya){
     if(angka === 5){
         angka = angka - 3
     }else if(angka === 4){
         angka = angka + 1
     }else if(angka >= 0 || angka <= 3){
         angka = angka + 2
     }
    }
    tanahSebelumnya = angka
    return angka 
    
}

function randomWaktu(min, max){

    return Math.round(Math.random() * (max - min) + min)
}


function tikusMuncul(){
    let tRandom = tanahRandom(tanah)
    tanah[tRandom].classList.add('muncul')
    let rWaktu = randomWaktu(500, 900)
    setTimeout(function(){
        tanah[tRandom].classList.remove('muncul')
        if(!selesai){
            tikusMuncul()
        }
        
    }, rWaktu)
}

function mulai(){
    selesai = false
    skor = 0
    score.textContent = 0
    tikusMuncul()
    document.querySelector('.play').style.display = "none"
    setTimeout(function(){
        selesai = true
        document.querySelector('.play').style.display = "block"
    }, 20000)
}

function pukul(){
    skor++
    score.textContent = skor

    this.parentNode.classList.remove('muncul')
}

tikus.forEach(function(t){
    t.addEventListener('click', pukul)
})