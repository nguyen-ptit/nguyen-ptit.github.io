$(function () {
    var b = $("#button");
    var w = $("#wrapper");
    b.click(function() {
        b.html('');
        w.toggleClass('open'); /* <-- toggle the application of the open class on click */
      });
});