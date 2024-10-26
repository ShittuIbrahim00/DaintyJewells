
document.querySelector('.SHOP').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Shop button clicked');
    
    let userId = localStorage.getItem("user");
    
    localStorage.setItem("userId", userId);
    window.location.href = 'shop.html';
});
