<nav>
  <ul>
    <slot />
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: var(--standard-border);
  }

  nav ul {
    width: 100%;
    display: flex;
  }
</style>
