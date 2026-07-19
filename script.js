const products = [
{
name:"كريب نوتيلا",
price:"7000 د.ع",
category:"crepe",
image:"images/crepe1.jpg"
},
{
name:"كريب لوتس",
price:"8000 د.ع",
category:"crepe",
image:"images/crepe2.jpg"
},
{
name:"وافل نوتيلا",
price:"7000 د.ع",
category:"waffle",
image:"images/waffle1.jpg"
},
{
name:"بان كيك",
price:"8000 د.ع",
category:"pancake",
image:"images/pancake1.jpg"
},
{
name:"ميلك شيك أوريو",
price:"7000 د.ع",
category:"milkshake",
image:"images/milkshake1.jpg"
},
{
name:"فرابيه كراميل",
price:"7000 د.ع",
category:"ice",
image:"images/frappe1.jpg"
},
{
name:"آيس لاتيه",
price:"6000 د.ع",
category:"ice",
image:"images/ice1.jpg"
},
{
name:"موهيتو بلو",
price:"5000 د.ع",
category:"mojito",
image:"images/mojito1.jpg"
},
{
name:"عصير برتقال",
price:"5000 د.ع",
category:"juice",
image:"images/juice1.jpg"
},
{
name:"قهوة عربية",
price:"2000 د.ع",
category:"coffee",
image:"images/coffee1.jpg"
},
{
name:"قهوة تركية",
price:"3000 د.ع",
category:"coffee",
image:"images/coffee2.jpg"
},
{
name:"هوت شوكليت",
price:"5000 د.ع",
category:"hot",
image:"images/hot1.jpg"
},
{
name:"مكسيكي",
price:"6000 د.ع",
category:"mexican",
image:"images/mexican1.jpg"
},
{
name:"أركيلة",
price:"8000 د.ع",
category:"hookah",
image:"images/hookah1.jpg"
}
];

const menu=document.getElementById("menu");
const search=document.getElementById("search");
const buttons=document.querySelectorAll(".categories button");
const viewer=document.getElementById("viewer");
const viewerImage=document.getElementById("viewerImage");
const close=document.getElementById("close");

function showProducts(list){
menu.innerHTML="";
list.forEach(item=>{
menu.innerHTML+=`
<div class="card">
<img src="${item.image}" onclick="openImage('${item.image}')">
<div class="info">
<h3>${item.name}</h3>
<span class="price">${item.price}</span>
</div>
</div>`;
});
}

showProducts(products);

buttons.forEach(btn=>{
btn.onclick=()=>{
buttons.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");

const cat=btn.dataset.category;

if(cat==="all"){
showProducts(products);
}else{
showProducts(products.filter(p=>p.category===cat));
}
};
});

search.onkeyup=()=>{
const value=search.value.toLowerCase();
showProducts(products.filter(p=>p.name.toLowerCase().includes(value)));
};

function openImage(src){
viewer.classList.add("show");
viewerImage.src=src;
}

close.onclick=()=>{
viewer.classList.remove("show");
};

viewer.onclick=(e)=>{
if(e.target===viewer){
viewer.classList.remove("show");
}
};

window.onload=()=>{
setTimeout(()=>{
document.querySelector(".loading").style.display="none";
},1200);
};
