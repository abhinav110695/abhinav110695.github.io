
// let menu = document.querySelector('#menu-bars');
// let header = document.querySelector('header');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

// const Nav = () => {
// 	return `<nav class="nav" role="navigation">
	  
// 	<h3 class="logo" id="change">Portfo<span>lio</span></h3>
// 	<ul class="nav__items" id="SideBar">
// 		<li class="nav__item">
// 			<a href="#top" class="nav__link">Home</a>
// 		</li>
// 		<li class="nav__item">
// 			<a href="#About" class="nav__link">About</a>
// 		</li>

// 		<li class="nav__item">
// 		<a href="./img/Krishna Keshav Resume.pdf" download="Krishna Keshav Resume" title="Download Resume" class="nav__link">Resume</a>
// 		</li>
		
// 		<li class="nav__item">
// 			<a href="#Skills" class="nav__link">Skills</a>
// 		</li>
// 		<li class="nav__item">
// 			<a href="#projects" class="nav__link">Projects</a>
// 		</li>
// 		<li class="nav__item">
// 			<a href="#contact" class="nav__link">Contact</a>
// 		</li>

// 		<li class="nav__item">
// 			<a href="#Git" class="nav__link">Contribution</a>
// 		</li>
		

//         <i class="fa-sharp fa-solid fa-xmark" onclick="closeMenu()"></i>
// 	</ul>
//     <i class="fa-solid fa-bars" onclick="openMenu()"></i>
// </nav>`
// }
// document.querySelector("#nav").innerHTML = Nav();

let sidemenu = document.getElementById("SideBar");

const openMenu = () => {
	sidemenu.style.right = "0";
}

const closeMenu = () => {
	sidemenu.style.right = "-200px";
}