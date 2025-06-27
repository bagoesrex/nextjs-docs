export function Post({ post }) {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </li>
  );
}
