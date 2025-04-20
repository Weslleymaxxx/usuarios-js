export const fetchApiUsers = async () => {
    const reqUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const resUsers = await reqUsers.json();

    return resUsers
}