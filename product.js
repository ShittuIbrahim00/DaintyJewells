$(document).ready(function () {  
    // Get the product ID from local storage  
    let productId = localStorage.getItem("selectedProductId");  
    console.log("Product ID:", productId);  
 

    $.ajax({  
        url: `http://ecommerce.reworkstaging.name.ng/v2/products/${productId}`,  
        type: "GET",  
        success: function (res) {  
            console.log(res); 

            if (res) {   
                let productDetails = `   
                    <div class="grid two_col">  
                        <div></div>  
                        <div class="productImg"><img src="${res.images}" alt="${res.title}"></div>   
                    </div>  
                    <div class="grid">   
                        <div class="warmthDress">  
                            <h2>${res.title}</h2>  
                            <span>$${res.price}</span>  
                            <p>or make 4 interest-free payments starting at $19.99 with</p>  
                            <div>  
                                <button>afterpay</button>  
                                <a href="">More info</a>  
                            </div>  
                            <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">  
                                <div class="star">  
                                    <i class="fa-solid fa-star"></i>  
                                    <i class="fa-solid fa-star"></i>  
                                    <i class="fa-solid fa-star"></i>  
                                    <i class="fa-solid fa-star"></i>  
                                    <i class="fa-solid fa-star"></i>  
                                </div>  
                                <div style="font-family: 'Icon'; font-size: .9em; letter-spacing: .5px; color: grey;">  
                                    (No Reviews yet)  
                                </div>  
                                |  
                                <div style="font-family: 'Icon'; font-size: .9em; letter-spacing: .5px; color: #DFAFA7;">  
                                    Add Your Review  
                                </div>  
                            </div>  
                            <div>  
                                <label for="">COLOR:</label>  
                                <div class="color"></div>  
                            </div>  
                            <div>  
                                <label for="">SIZE:</label>  
                                <div>  
                                    <select name="" id="">  
                                        <option value="">Size</option>  
                                    </select>  
                                </div>  
                            </div>  
                            <div>  
                                <label for="">QTY:</label>  
                                <div style="display: flex; align-items: center;">  
                                    <div style="border: 1px solid rgba(169, 169, 169, 0.49); width: 50px; justify-content: center; display: flex;">  
                                        <p>1</p>  
                                    </div>  
                                    <div style="display: flex; flex-direction: column;" class="btn">  
                                        <button class="btn1">+</button>  
                                        <button class="btn1">-</button>  
                                    </div>  
                                </div>  
                            </div>  
                            <div class="globe">  
                                <i class="fa-solid fa-globe"></i>  
                                <span>Worldwide Shipping Available</span>  
                            </div>  
                            <div class="addToBag">  
                                <button class="addToCart">ADD TO BAG</button>  
                            </div>  
                        </div>   
                    <div class="findText">  
                        <p>FIND YOUR SIZE</p>  
                        <span>If your measurements are between those listed in the size chart, pick the next larger size.</span>  
                        <a href="">Size Chart</a>  
                    </div>  
                    <div class="socials">  
                        <div class="socialOne">  
                            <i class="fa-regular fa-heart icons"></i>  
                            <span>Add to Favorites</span>  
                        </div>  
                        <div style="display: flex; gap: 30px;">  
                            <i class="fa-brands fa-facebook-f"></i>  
                            <i class="fa-regular fa-envelope"></i>  
                            <i class="fa-regular fa-hard-drive"></i>  
                            <i class="fa-brands fa-pinterest-p"></i>  
                            <button class="bluebtn"><i class="fa-regular fa-thumbs-up"></i>like 21</button>  
                        </div>  
                    </div>  
                    <div class="details">  
                        <p>DETAILS</p>  
                        <span>${res.descp}</span>  
                        <span>Meet our models for help on finding the perfect fit.</span>  
                        <span>30% Rayon | 30% Cotton | 35% Polyester | 5% Spandex</span>  
                        <span>Care instructions: Cold, Delicate Machine wash. Hang Dry, Do not tumble dry.</span>  
                        <h2>Gift wrapping:</h2>  
                        <p style="letter-spacing: 0; margin: 0; font-size: 1.3em;">Options available</p>  
                    </div> 
                </div> 
                `;  
     
                $('#two').append(productDetails);


$('.addToCart').on('click', function() {  
    const cartItem = {  
        id: productId,  
        title: res.title,  
        price: res.price,  
        quantity: 1,  
        image: res.images  
    };  

    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];  
 
    const existingProductIndex = cart.findIndex(item => item.id === productId);  
    if (existingProductIndex !== -1) {   
        alert(`${res.title} is already in the cart.`);  
    } else {   
        cart.push(cartItem);    
        localStorage.setItem('cart', JSON.stringify(cart));  
  
        let cartCount = cart.length;   
        localStorage.setItem('cartCount', cartCount);  
    }  
 
    window.location.href = 'cart.html';   
});
            }  
        },  
        error: function(jqXHR, textStatus, errorThrown) {  
            console.error("Error fetching product details:", textStatus, errorThrown);  
            console.log("Response Text:", jqXHR.responseText); 
        }  
    });  
});