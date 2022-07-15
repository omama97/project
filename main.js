const tweeter = Tweeter();
const myrender = render(tweeter.getPost());
const mybutton = $("#PostsButton");
mybutton.click(function () {
  const textvalue = $("#textArea").val();
  tweeter.AddPost(textvalue);
  render(tweeter.getPost());
});
const post = $(".container");

post.on("click", ".delete", function () {
  var id = $(this).parent("div").find(".dbutton").attr("id");
  console.log(id);
  tweeter.removePosts(id);

  render(tweeter.getPost());
});

post.on("click", ".commentbutton", function () {
  var text = $(this).parent("div").find(".commentinput").val();
  var id = $(this).parent("div").parent("div").find(".dbutton").attr("id");
  console.log(id);
  tweeter.Addcomment(text, id);

  render(tweeter.getPost());
});

post.on("click", ".material-icons", function () {
  var idpost = $(this)
    .parent("div")
    .parent("div")
    .parent("div")
    .find(".dbutton")
    .attr("id");
  var idcomment = $(this)
    .parent("div")
    .parent("div")
    .find(".comments")
    .attr("id");

  tweeter.removeComments(idpost, idcomment);

  render(tweeter.getPost());
});
