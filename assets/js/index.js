const changeImage = (element,images)=>{
	let i = 0
	setInterval(()=>{
		element.classList.add("animation")
		setTimeout(()=>{
			element.classList.remove("animation")
		},500)
		if(i>=images.length) i=0
		element.src=`./assets/img/${images[i]}`
		i+=1
	},5000)
}
changeImage(document.querySelector(".image1"),["logo.png","image.png","image2.png"])
changeImage(document.querySelector(".image2"),["image3.png","image4.png","taller1.png","image5.png"])