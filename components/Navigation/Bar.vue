<template>
  <header>
    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">NuxtJs</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Users</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <nuxt-link
          exact
          active-class="activeNavTab"
          class="navbar-brand"
          aria-current="page"
          to="/"
          >Home</nuxt-link
        >
        <!-- <a class="navbar-brand" href="#">Home</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link
                exact
                active-class="activeNavTab"
                class="nav-link"
                aria-current="page"
                to="/"
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                active-class="activeNavTab"
                class="nav-link"
                to="/users"
                >Users</nuxt-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul class="dropdown-menu">
                <li>
                  <nuxt-link
                    active-class="activeNavTab"
                    class="dropdown-item"
                    to="aboutcompany"
                    >Company</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link no-prefetch class="dropdown-item" to="/login"
                    >Login</nuxt-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<script></script>

// no-prefetch disable lazy-loading
