export const config = {
    auth: {
        path: 'auth',
        route: 'auth',
        login: {
            path: 'login',
            route: 'auth/login'
        },
        signup: {
            path: 'signup',
            route: 'auth/signup'
        }
    },
    user:{
        path: 'users',
        route: 'users',
        allUsers: {
            path: 'all',
            route: 'users/all'
        },
        viewUser: {
            path: ':id',
            route: 'users/'
        },
        addUser: {
            path: 'add',
            route: 'users/add'
        },
        editUser: {
            path: 'edit/:id',
            route: 'users/edit'
        }
    }
}