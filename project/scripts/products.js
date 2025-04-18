const products = [
	{
	  productName: "Cabernet Sauvignon",
	  imageUrl:
	  "https://cdn.pixabay.com/photo/2015/11/05/19/54/rose-1024710_1280.jpg"
	},
	{
	  productName: "Chardonnay",
	  imageUrl:
	  "https://media.istockphoto.com/id/924149522/photo/close-up-of-wine-bottles-on-a-shelf-at-a-winery.jpg?s=612x612&w=is&k=20&c=DUeWRBryEncsETCnJUB9FhGW0EpPKk0tJLiPNotKsD8="
	},
	{
	  productName: "Merlot",
	  imageUrl:
	  "https://media.istockphoto.com/id/1297234084/photo/two-red-wineglasses-on-rustic-wooden-table.jpg?s=612x612&w=is&k=20&c=GYxVwm2mfhNOcnsbel3_1suQFPczI0T_VOAAf7-i1OM="
	},
      {
        productName: "Malbec",
        imageUrl:"https://cdn.pixabay.com/photo/2018/01/12/09/45/glass-3077869_1280.jpg"
      },
      {
        productName: "Sauvignon Blanc",
        imageUrl:"https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613_960_720.jpg"
      }
  ];

  
  const container = document.querySelector('.sampleproducts'); 
  if (container != null ) {products.slice(0,3).forEach(product => {
	const card = document.createElement('div');
	card.classList.add('product-card');
  
	const image = document.createElement('img');
	image.setAttribute('src', product.imageUrl);
	image.setAttribute('alt', product.productName);
	image.setAttribute('loading', 'lazy');
  
	card.appendChild(image);
  
	container.appendChild(card);
  });
  }
  

  {
  const productsConteiner = document.querySelector('.products'); 
  
  if (productsConteiner !== null )
  products.forEach(product => {
	const card = document.createElement('div');
	card.classList.add('product-card');
  
	const image = document.createElement('img');
	image.setAttribute('src', product.imageUrl);
	image.setAttribute('alt', product.productName);
	image.setAttribute('loading', 'lazy');
  
	card.appendChild(image);
  
	productsConteiner.appendChild(card);
  });
}