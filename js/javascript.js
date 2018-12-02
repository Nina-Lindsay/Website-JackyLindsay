<script type="text/javascript">
    document.getElementById("learn_more").onclick = function () {
        location.href = "about.html";
    };
</script>


$("#button").click(function(event) {
  var text = $("#input").val();
  $("#list").append('<li>' + text + '</li>');
});
