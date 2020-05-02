/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">Lab 7</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/upload/">Upload Image <span class="sr-only">(current)</span></route-link>
          </li>
        </ul>
      </div>
    </nav>
    `
});

Vue.component('app-footer', {
    template: `
    <footer>
        <div class="container">
            <p>Copyright &copy; Flask Inc.</p>
        </div>
    </footer>
    `
});

const Home = Vue.component('home', {
   template: `
    <div class="jumbotron">
        <h1>Lab 7</h1>
        <p class="lead">In this lab we will demonstrate VueJS working with Forms and Form Validation from Flask-WTF.</p>
    </div>
   `,
    data: function() {
       return {}
    }
});

const photo_upload = Vue.component('upload', {
    template: `
        <div class="jumbotron">
            <h1>Uploads</h1>
            <div>
                <form id="photoForm" method="POST" enctype="multipart/form-data">
                    <div>
                        <label id="descriptLabel" for="description">Description: </label><br>
                        <textarea id="description" name="description" placeholder="Add image decription here..."></textarea><br>
                        <input id="photo" type="file" name="fileupload"/><br><br>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>      
        </div>
    `,
     data: function() {
        return {
            response: [],
            error: []
        };
     },
 });

const NotFound = Vue.component('not-found', {
    template: `
    <div>
        <h1>404 - Not Found</h1>
    </div>
    `,
    data: function () {
        return {}
    }
})

// Define Routes
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: Home },
        // Put other routes here

        { path: "/upload/", component: photo_upload },
        // Catch the file upload route

        // This is a catch all route in case none of the above matches
        { path: "*", component: NotFound }
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});