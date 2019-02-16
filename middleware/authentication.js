/* globals sessionStorage */

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (sessionStorage.token) {
    console.log("authentica file ->", sessionStorage);
    return redirect('/')
  } else {
    return redirect('/signup')
  }
}
