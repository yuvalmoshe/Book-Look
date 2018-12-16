var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ $('#usr').val()    ,
    success: function (data) {

      const booklookData = {
        img: data.items[0].volumeInfo.imageLinks.thumbnail,
        authors: data.items[0].volumeInfo.authors,
        description: data.items[0].volumeInfo.description,
        title: data.items[0].volumeInfo.title

      };

      let source = $('#booklook-template').html();
      let template = Handlebars.compile(source)
      let newHTML = template(booklookData);

      $('#information').append(newHTML);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

$("#button1").click(function () {
  fetch();
});




