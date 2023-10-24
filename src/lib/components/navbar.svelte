<nav>
  <ul>
    <slot></slot>
  </ul>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid black;
  }

  nav ul {
    width: 100%;
    display: flex;
  }
</style>
