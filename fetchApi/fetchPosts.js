export const fetchApiPosts = async () => {
    const reqPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resPosts = await reqPosts.json();

    return resPosts
}