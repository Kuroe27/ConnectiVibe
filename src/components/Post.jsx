import PostContainer from "./PostContainer";

const Post = ({ posts, onDelete }) => {
  return (
    <>
      {posts.map((post) => (
        <PostContainer key={post.id} post={post} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Post;
