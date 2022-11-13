
 let products=[
    {
     pic:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-matte-as-hell-crayon-lipstick-value-set-14600053391443.jpg?v=1619119204",
     name:"Modern Matte Lipstick Value Set",
     price:"₹1149",
    }
 ];

 document.querySelector(".add").addEventListener('click',myfun());
 function myfun(){
     localStorage.setItem("cartItem",JSON.stringify(products));
 }


 





  
    
 
        
            


