export function setUserId(id: number) {
    const date = new Date();

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = "userId="+id+"; expires="+date.toUTCString()+"; path=/";
}

export function getUserId() {
    const value = "; " + document.cookie;
    const parts = value.split("; userId=");
    
    if (parts.length == 2) {
        return +(parts.pop().split(";").shift());
    }
}

export function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = "userId=; expires="+date.toUTCString()+"; path=/";
}