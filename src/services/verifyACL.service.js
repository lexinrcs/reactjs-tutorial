let USER_ACL_LIST = []

export const UpdateUserACLList = (ACLs) => {
    USER_ACL_LIST = ACLs
}

export const UserACLChecking = (pageACL) => {

    // Check user if he/she has access to the page
    if (USER_ACL_LIST.includes(pageACL))
        return true;

    return false;

}