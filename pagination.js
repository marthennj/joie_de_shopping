document.addEventListener('DOMContentLoaded', function() {
    var currentPage = 1;
    var itemsPerPage = 4;

    function showPage(page) {
        var cartItems = document.getElementsByClassName('cart-item');
        for (var i = 0; i < cartItems.length; i++) {
            cartItems[i].style.display = 'none';
        }
        for (var i = (page - 1) * itemsPerPage; i < page * itemsPerPage; i++) {
            if (i < cartItems.length) {
                cartItems[i].style.display = 'block';
            }
        }
    }

    showPage(currentPage);

    document.querySelector('.next-btn').addEventListener('click', function() {
        if (currentPage < Math.ceil(document.getElementsByClassName('cart-item').length / itemsPerPage)) {
            currentPage++;
            showPage(currentPage);
        }
    });

    document.querySelector('.prev-btn').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
});