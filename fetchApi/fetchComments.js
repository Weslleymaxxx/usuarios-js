export const fetchApiComments = async() => {
    const reqComments = await fetch('https://jsonplaceholder.typicode.com/comments');
    const resComments = await reqComments.json();

    return resComments
}