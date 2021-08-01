// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from './users-api';

export async function signUp(userData) {
    try {
        // delegate the network request code to the users-api.js API module
        // this will ultimately return a json web token (JTW)
        const token = await usersAPI.signUp(userData);
        //console by returning whatever is sent back to the server
        return token 
    } catch {
        throw new Error('Invalid Sign Up');
    }
}
