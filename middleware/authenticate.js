export default function ({ store, redirect, route }) {
    // If the user is not authenticated, go to /signup page

    const notSignedIn = !store.state.user || !store.state.user.token
    const notSigninPage = route.path !== "/signup"

    if (notSignedIn && notSigninPage) {
        return redirect('/signup')
    } else {
        return;
    }
  }