import { User } from 'src/models/user';

export function setUser(user: User) {
    const date = new Date();

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = "user="+JSON.stringify(user)+"; expires="+date.toUTCString()+"; path=/";
}

export function getUser() {
    const tab = document.cookie.split("user=");
    if (tab.length == 2){
        const userJSON = tab[1];
        
        return JSON.parse(userJSON);
    }
}

export function deleteCookie() {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = "user=; expires="+date.toUTCString()+"; path=/";
}