module.exports = {
    getRescue: (req, res) => {
  const posts = [];
      res.render('rescue.ejs', {posts: posts });
    }
  };
  

  // const getRescue = (req, res) => {
  //   // Fetch posts from the database or any other source
  //   const posts = [
  //     // { _id: 1, name: 'Post 1' },
  //     // { _id: 2, name: 'Post 2' },
  //     // Add more posts as needed
  //   ];
  
  //   // Pass the posts to the EJS template
  //   res.render('rescue', { posts: posts });
  // };
  
  // module.exports = { getRescue };