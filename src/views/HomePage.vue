<template>
  <div class="Homepage bg-dark">
    <nav class="navbar navbar-expand-lg fixed-top bg-light">
      <div class="container-fluid">
        <a class="navbar-brand mb-0 h1" href="#" @click="backtoLogin()">Smart Drive</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Our Team</a></li>
                <li><a class="dropdown-item" href="#">Our Story</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <a class="nav-link active" aria-current="page" href="#" @click="backtoLogin">
            Logout
          </a>
        </div>
      </div>
    </nav>
    <div id="mycloud">
      <p class="h3 d-flex text-light">My Cloud</p>
    </div>
    <div id="sortby">
      <p class="h6 d-flex text-light" id="sortbytext">Sort By</p> <a class="dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Time</a></li><li><a class="dropdown-item" href="#">A-Z</a></li><li><a class="dropdown-item" href="#">Size</a></li></ul>
    </div>
    <div class="row" id="cards">
      <div class="col-lg-3 col-md-4 d-flex justify-content-center" id="card1">
        <div class="card bg-light" id="card" style="width: 14rem; height: 14rem;">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <img src="..\..\favicon_io\yellow_folder.png" alt="foldericon" width="80" height="80">
              </div>
              <div class="col" style=" text-align:right;">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Star</a></li>
                  <li><a class="dropdown-item" href="#">Download</a></li>
                  <li><a class="dropdown-item" href="#">Delete</a></li>
                </ul>
              </div>
            </div>
            <h5 class="card-title" id="ctitle">Victoria</h5>
            <hr style="width:50%;height:2px;border-width:0;color:black;background-color:black">
            <h6 class="card-subtitle mb-2 text-secondary">21 Mb</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backtoLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
