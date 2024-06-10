// Lab 16 - JSON & APIs
// Author: Stephen Francoeur
// Date: 6/9/2024

$.ajax({
    url: 'your-endpoint-url', // Add your endpoint URL here
    dataType: "json",
    success: function (data) {
        $('#response').html(`<p>${data.answer}</p><img src="${data.image}" alt="Yes or No Image">`);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);
        $('#response').html('<p>Sorry, something went wrong. Please try again later.</p>');
    }
});
