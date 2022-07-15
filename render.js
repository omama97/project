console.log("render");
console.log(arrayOfPosts);

const renderer = function () {
  let input = $("#input");
  let post = $("#post");
  let posts = $("#posts");
  let title = $("#title");
  let container = $("#container");
  const renderPosts = function (arrayOfPosts) {
    posts.empty();
    for (const postitem of posts) {
      posts.append(
        `<div class="posts" data-id=${postitem.id}>${postitem.text}</div>`
      );

      for (const commentItem of postitem.comments) {
        posts.append(
          `<div class="comments" data-id=${commentItem.id}><i class="material-icons">delete</i> <p>${commentItem.text}<p></div>`
        );
      }
    }
  };

  renderer();
};
