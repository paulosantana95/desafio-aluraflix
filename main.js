let movieList = [
"https://upload.wikimedia.org/wikipedia/pt/9/9a/Big-bang-theory_Temporada_12_poster.jpg",
"https://imania.com.br/wp-content/uploads/2020/10/harry-potter-7.png",
"https://s2.glbimg.com/QSYSNn6iOxdy_B4xRufk5EIODEc=/362x536/https://s2.glbimg.com/n3U3-nxkWddQ051zh597_NU-ip8=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/X/F/v6OfUvQrqybWyzDYu0KA/2021-1682-how-i-met-your-mother-poster.jpg",
"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/90/95/85/20122112.jpg",
"https://br.web.img2.acsta.net/pictures/19/09/15/23/52/1729197.jpg"
];

let newMovie = document.querySelector("#showMovieList");
let i;

function addMovie(){
    if (movieList.indexOf(imgLink) == -1){
        let imgLink = document.querySelector("#imgLink").value;

        movieList.push(imgLink);

        newMovie.innerHTML = newMovie.innerHTML + "<img src=" +imgLink+ ">" 
    } else { //if (movieList.indexOf(imgLink) > -1 )
        alert("Filme já adicionado! Por favor selecione um Título diferente.");
    }
}

for(i = 0; i < movieList.length; i++) {
    document.write("<img src="+ movieList[i] +">")
}


