const Tweeter = function () {
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 2;
  let commentIdCounter = 6;
  const getPost = function () {
    return posts;
  };

  const AddPost = function (text) {
    postIdCounter = postIdCounter + 1;
    let newpost = { text: text, id: "p" + postIdCounter, comments: [] };
    posts.push(newpost);
  };

  const Addcomment = function (text, idpost) {
    commentIdCounter = commentIdCounter + 1;
    let newcomment = { text: text, id: "c" + commentIdCounter };
    for (let index of posts) {
      if (idpost == index.id) index.comments.push(newcomment);
    }
  };
  const removePosts = function (idpost) {
    for (let index in posts) {
      if (idpost == posts[index].id) posts.splice(index, 1);
    }
  };

  const removeComments = function (idpost, idcomment) {
    for (let index of posts) {
      if (idpost == index.id) {
        for (let inner in index.comments) {
          if (idcomment == index.comments[inner].id)
            index.comments.splice(inner, 1);
        }
      }
    }
  };

  return {
    getPost: getPost,
    AddPost: AddPost,
    Addcomment: Addcomment,
    removePosts: removePosts,
    removeComments: removeComments,
  };
};
