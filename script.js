const image = document.querySelector('img');
const title = document.getElementById('title');
const music = document.querySelector('audio');
const artist = document.getElementById('artist');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEL = document.getElementById('current-time');
const durationEL= document.getElementById('duration');
const volume = document.getElementById('volume');
const volBtn = document.getElementById('volumeBtn');
//Music
const songs = [
    {
        hinh: 'anh_1',
        name: 'AiLaNguoiThuongEm-QuanAP-6003085',
        artist: 'Quân AP',
        disPlayName: 'Ai Là Người Thương Em'
    },
    {
        hinh: 'anh_2',
        name: 'BoEm-DINH-6820879',
        artist: 'Dính',
        disPlayName: 'Bồ Em'
    },
    {
        hinh: 'anh_3',
        name: 'BongHoaDepNhat-QuanAP-6607955',
        artist: 'Quân AP',
        disPlayName: 'Bông Hoa Đẹp Nhất'
    },
    {
        hinh: 'anh_1',
        name: 'BuonLamChiEmOi1-HoaiLam-6297318',
        artist: 'Hoài Lâm',
        disPlayName: 'Buồn Làm Chi Em Ơi'
    },
    {
        hinh: 'anh_2',
        name: 'ChuyenDoiTa-EmceeLDaLAB-7120974',
        artist: 'DaLab',
        disPlayName: 'Chuyện Đôi Ta'
    },
    {
        hinh: 'anh_3',
        name: 'DeMiNoiChoMaNghe-HoangThuyLinh-6153588',
        artist: 'Hoàng Thùy Linh',
        disPlayName: 'Để Mị Nói Cho Mà Nghe'
    },
    {
        hinh: 'anh_4',
        name: 'DuChoMaiVeSau-buitruonglinh-6818907',
        artist: 'Buitruonglinh',
        disPlayName: 'Dù Cho Mai Về Sau'
    },
    {
        hinh: 'anh_4',
        name: 'DuongTaChoEmVe-buitruonglinh-6318765BoXiBo-HoangThuyLinh-7702270',
        artist: 'Buitruonglinh',
        disPlayName: 'Đường Ta Chở Em Về'
    },
    {
        hinh: 'anh_1',
        name: 'EmKhongHieu-ChanggMinhHuy-7043556',
        artist: 'Chang',
        disPlayName: 'Em Không Hiểu'
    },
    {
        hinh: 'anh_2',
        name: 'EmKhongLaDuyNhat-TocTien-4781181',
        artist: 'Tóc Tiên',
        disPlayName: 'Em Không Là Duy Nhất'
    },
    {
        hinh: 'anh_3',
        name: 'HoaNoKhongMau1-HoaiLam-6281704',
        artist: 'Hoài Lâm',
        disPlayName: 'Hoa Mở Không Màu'
    },
    {
        hinh: 'anh_4',
        name: 'LoiDuongMatRemix-LylyHIEUTHUHAI-6859730',
        artist: 'Hiếu Thứ Hai',
        disPlayName: 'Lời Đường Mật(Remix)'
    },
    {
        hinh: 'anh_1',
        name: 'LoSayByeLaBye-LemeseChangg-6926941',
        artist: 'Chang',
        disPlayName: 'Lỡ Say Bye Là Bye'
    },
    {
        hinh: 'anh_2',
        name: 'MamaBoyKingOfRap-HIEUTHUHAI-6720541',
        artist: 'Hiếu Thứ Hai',
        disPlayName: 'MamaBoy'
    },
    {
        hinh: 'anh_3',
        name: 'NeuAnhLaEm-TocTienHuaKimTuyen-8179037',
        artist: 'Tóc Tiên',
        disPlayName: 'Nếu Anh Là Em'
    },
    {
        hinh: 'anh_4',
        name: 'NgheNhuTinhYeu-HIEUTHUHAI-7045493',
        artist: 'Hiếu Thứ Hai',
        disPlayName: 'Nghe Như Tình Yêu'
    },
    {
        hinh: 'anh_1',
        name: 'NguMotMinhtinhRatTinh-HIEUTHUHAINegavKewtiie-8397765',
        artist: 'Hiếu Thứ Hai',
        disPlayName: 'Ngủ Một Mình(Remix)'
    },
    {
        hinh: 'anh_1',
        name: 'NhuPhutBanDau-NooPhuocThinh-6458668',
        artist: 'Noo Phước Thịnh',
        disPlayName: 'Như Phút Ban Đầu'
    },
    {
        hinh: 'anh_2',
        name: 'PhutBanDau-HoaiLam-3289002',
        artist: 'Hoài Lâm',
        disPlayName: 'Phút Ban Đầu'
    },
    {
        hinh: 'anh_3',
        name: 'WaitingForYou-MONOOnionn-7733882',
        artist: 'Mono',
        disPlayName: 'Waiting For You'
    },
    {
        hinh: 'anh_4',
        name: 'YeuNguoiCoUocMo-buitruonglinh-8396692',
        artist: 'Buitruonglinh',
        disPlayName: 'Yêu Một Người Có Ước Mơ'
    },
]
//check if Playing
let isPlaying = false;

//Play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause');
    music.play();
}

//Pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'play');
    music.pause();
}

//Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//current song
let indexSong = 0;
//Update Song
function loadSong(song){
    title.textContent = song.disPlayName;
    artist.innerText = song.artist;
    music.src = `nhac/${song.name}.mp3`;
    image.src = `hinh/${song.hinh}.jpg`;
}

//Prev Song
function prevSong(){
    indexSong--;
    if(indexSong < 0){
        indexSong = songs.length - 1;
    }
    console.log(indexSong);
    loadSong(songs[indexSong]);
    playSong();
}

//Next Song
function nextSong(){
    indexSong++;
    if(indexSong > songs.length - 1) {
        indexSong = 0;
    }
    console.log(indexSong);
    loadSong(songs[indexSong]);
    playSong();
}

// update progress bar & time
function updateProgressBar(e){
    if(isPlaying){
        const {duration, currentTime} = e.srcElement;
        //update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        //caculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if(durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        //delay switching duration element to aviod NaN
        if(durationSeconds) {
            durationEL.textContent = `${durationMinutes} : ${durationSeconds}`;
        }
        //caculate display for current
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if(currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEL.textContent = `${currentMinutes} : ${currentSeconds}`;
    }
}
//set progress bar
function setProgressBar(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}

//set volume bar
function setVolume(){
    music.volume = volume.value / 100;
}
let isMute = false;
//set mute && unmute volume
function unMuteVolume(){
    isMute = false;
    music.muted = false;
    volBtn.classList.replace('fa-volume-off', 'fa-volume-up');
    volBtn.setAttribute('title', 'mute');
}

function muteVolume(){
    isMute = true;
    music.muted = true;
    volBtn.classList.replace('fa-volume-up', 'fa-volume-off');
    volBtn.setAttribute('title', 'unmute')
}
//Onload select first song
loadSong(songs[indexSong]);

//event listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
volume.addEventListener('change', setVolume);
volBtn.addEventListener('click', () => (isMute ? unMuteVolume() : muteVolume()));