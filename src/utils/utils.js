


export const getInitials = (name) => {
    return name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("");
}
