// api key
const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
//TMDB website url
const BASE_URL = 'https://api.themoviedb.org/3';
//url
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
//image url
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const img_url = "https://image.tmdb.org/t/p/original";
const search = document.getElementById('search');

// requests for movies data 
const requests = {
  fetchPopular: `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}`,
  fetchTrending: `${BASE_URL}/trending/all/day?${API_KEY}&language=en-US`,
  fetchNetflixOrignals: `${BASE_URL}/discover/tv?${API_KEY}&with_networks=213`,
  fetchActionMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=16`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=99`,
  fetchscienceFiction: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=878`,
};

// used to truncate the string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

//banner
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);
  // every refresh the movie will be change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length + 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner__title");
  var banner__desc = document.getElementById("banner__description");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  banner__desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = setMovie.title;
})

//popular movies data
const main = document.getElementById('main');
get_popular_Movies(API_URL);

function get_popular_Movies(url){

	fetch(url).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_popular_Movie(data.results);
	})
}

function show_popular_Movie(data){
	main.innerHTML = '';
	data.forEach(movie => {
	const {title, poster_path, overview, id} = movie;
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
		<img src="${poster_path? IMG_URL+poster_path : "http://via.placeholder.com/1000x1500"}"  class="card-img" alt="${title}" />
			<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		` 
		main.append(movieEl);
		
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}



//trending movie data
const trending_main = document.getElementById('trending_main');
get_trending_Movies(BASE_URL);

function get_trending_Movies(url){

	fetch(requests.fetchTrending).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_trending_Movies(data.results);
	})
}
function show_trending_Movies(data){
	trending_main.innerHTML='';
	data.forEach(movie =>{
		const {title, poster_path, overview, id} = movie;
		const movieTr=document.createElement('div');
		movieTr.classList.add('movie');
		movieTr.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		trending_main.append(movieTr);
				
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

//netflix original data
const netflix_main = document.getElementById('netflix_main');
get_netflix_Movies(BASE_URL);

function get_netflix_Movies(url){

	fetch(requests.fetchNetflixOrignals).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_netflix_Movies(data.results);
	})
}
function show_netflix_Movies(data){
	netflix_main.innerHTML='';
	data.forEach(movie =>{
		const {name,poster_path,overview, id} = movie;
		const movieNf=document.createElement('div');
		movieNf.classList.add('movie');
		movieNf.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${name}"/>
		<div class="card-body">
				<h2 class="name">${name}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		netflix_main.append(movieNf);
		
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})

	})
}

// action data
const action_main = document.getElementById('action_main');
get_action_Movies(BASE_URL);

function get_action_Movies(url){

	fetch(requests.fetchActionMovies).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_action_Movies(data.results);
	})
}
function show_action_Movies(data){
	action_main.innerHTML='';
	data.forEach(movie =>{
		const {title, poster_path, overview, id} = movie;
		const movieAc=document.createElement('div');
		movieAc.classList.add('movie');
		movieAc.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		action_main.append(movieAc);
		
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

// Comedy Movies data
const comedy_main = document.getElementById('comedy_main');
get_comedy_Movies(BASE_URL);

function get_comedy_Movies(url){

	fetch(requests.fetchComedyMovies).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_comedy_Movies(data.results);
	})
}
function show_comedy_Movies(data){
	comedy_main.innerHTML='';
	data.forEach(movie =>{
		const {title,poster_path,overview,id} = movie;
		const movieCd=document.createElement('div');
		movieCd.classList.add('movie');
		movieCd.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		comedy_main.append(movieCd);
		
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

// horror Movies data
const horror_main = document.getElementById('horror_main');
get_horror_Movies(BASE_URL);

function get_horror_Movies(url){

	fetch(requests.fetchHorrorMovies).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_horror_Movies(data.results);
	})
}
function show_horror_Movies(data){
	horror_main.innerHTML='';
	data.forEach(movie =>{
		const {title,poster_path,overview,id} = movie;
		const movieHr=document.createElement('div');
		movieHr.classList.add('movie');
		movieHr.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		horror_main.append(movieHr);
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

// romantic Movies data
const romance_main = document.getElementById('romance_main');
get_romance_Movies(BASE_URL);

function get_romance_Movies(url){

	fetch(requests.fetchRomanceMovies).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_romance_Movies(data.results);
	})
}
function show_romance_Movies(data){
	romance_main.innerHTML='';
	data.forEach(movie =>{
		const {title,poster_path,overview,id} = movie;
		const movieRm=document.createElement('div');
		movieRm.classList.add('movie');
		movieRm.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		romance_main.append(movieRm);
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

// documentary Movies data
const document_main = document.getElementById('document_main');
get_document_Movies(BASE_URL);

function get_document_Movies(url){

	fetch(requests.fetchDocumentaries).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_document_Movies(data.results);
	})
}
function show_document_Movies(data){
	document_main.innerHTML='';
	data.forEach(movie =>{
		const {title,poster_path,overview,id} = movie;
		const movieDc=document.createElement('div');
		movieDc.classList.add('movie');
		movieDc.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		document_main.append(movieDc);
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

// Science Fiction Movies data
const science_main = document.getElementById('science_main');
get_scienceFiction_Movies(BASE_URL);

function get_scienceFiction_Movies(url){

	fetch(requests.fetchscienceFiction).then(res => res.json()).then(data =>{
		console.log(data.results);
		show_scienceFiction_Movies(data.results);
	})
}
function show_scienceFiction_Movies(data){
	science_main.innerHTML='';
	data.forEach(movie =>{
		const {title,poster_path,overview,id} = movie;
		const movieSf = document.createElement('div');
		movieSf.classList.add('movie');
		movieSf.innerHTML = `
		<img src="${IMG_URL+poster_path}" alt="${title}"/>
		<div class="card-body">
				<h2 class="name">${title}</h2>
				<h6 class="des">${overview}</h6>
				<button class="knowmore" id="${id}">Know More</button>
			</div>
		`
		science_main.append(movieSf);
		document.getElementById(id).addEventListener('click',() =>{
			console.log(id);
			openNav(movie)
		})
	})
}

const button = document.getElementById('btn');

button.addEventListener('click', (e) => {
	e.preventDefault();
	
	const searchTerm = search.value;
	
	if(searchTerm){
		get_popular_Movies(searchURL+'&query='+searchTerm);
		document.getElementById('popular').innerHTML = 'Search Results ';
	}else{
		get_popular_Movies(API_URL);
	}
	
	 
})

form.addEventListener('submit', (z) =>{
	document.getElementById('search').innerHTML = '';
})


/*form.addEventListener('submit', (e) =>{
	
	e.preventDefault();
	
	const searchTerm = search.value;
	
	if(searchTerm){
		get_popular_Movies(searchURL+'&query='+searchTerm)
	}else{
		get_popular_Movies(search_url);
	}
})*/


const overlayContent = document.getElementById('overlay-content');
/* Open when someone clicks on the span element */
function openNav(movie) {
	let id = movie.id;
	fetch(BASE_URL + '/movie/' + id + '/videos?'+ API_KEY ).then(res => res.json()).then(videoData => {
		console.log(videoData);
		if(videoData){
			  document.getElementById("myNav").style.width = "100%";
			  if(videoData.results.length > 0){
				  var embed = [];
				  var dots = [];
				  videoData.results.forEach((video,idx) => {
					  let {name, key, site}  = video;
					
					if(site == 'YouTube'){
					  embed.push(` 
					  <iframe width="560" height="315" 
					  src="https://www.youtube.com/embed/${key}" 
					  title="${name}" class="embed hide" frameborder="0" allow="accelerometer; 
					  autoplay; clipboard-write; encrypted-media; gyroscope; 
					  picture-in-picture" allowfullscreen></iframe>
					  `)
					  
					  dots.push(`
						<span class="dot"> ${idx + 1} </span>
					  `)
					  }
				  })
				  
				  var content = `
					<h1 class="no-results">${movie.original_title}</h1>
				  <br/>
				  
				  ${embed.join('')}
				  <br/>
				  
				  <div class="dots">${dots.join('')}</div>
				  
				  `
				  
				  overlayContent.innerHTML = content;
				  activeSlide  = 0;
				  showVideos();
			  }else{
				  overlayContent.innerHTML = `<h1 class="no-result">No Results Found</h1>`
			  }
		}
	})

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var activeSlide = 0;
var totalVideos  = 0;
var embedTag;
function showVideos(){
	let embedClasses = document.querySelectorAll('.embed');
	let dots = document.querySelectorAll('.dot');
	
	totalVideos = embedClasses.length;
	embedClasses.forEach((embedTag, idx) =>{
		if(activeSlide == idx){
			embedTag.classList.add('show');
			embedTag.classList.remove('hide');
		}else{
			embedTag.classList.add('hide');
			embedTag.classList.remove('show');
		}
	})
	
	dots.forEach((dot,indx) =>{
		if(activeSlide == indx){
			dot.classList.add('active');
		}else{
			dot.classList.remove('active');
		}
	})
}

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click' , () =>{
	if(activeSlide > 0){
		activeSlide-- ;
	}else{
		activeSlide  = totalVideos - 1;
	}
	
	showVideos()
})

rightArrow.addEventListener('click' , () =>{
	if(activeSlide < (totalVideos -1)){
		activeSlide++ ;
	}else{
		activeSlide  = 0;
	}
	showVideos()
})
//overlay content ends here