<script lang="ts">
  import "../app.css";

  import type { LayoutData } from "./$types";

  import NavbarItem from "$lib/components/navbar-item.svelte";
  import Navbar from "$lib/components/navbar.svelte";

  export let data: LayoutData;
</script>


<Navbar>
  <NavbarItem primary={true}>Jaguar</NavbarItem>
</Navbar>

<!-- Maybe a sidebar in the future? -->

<div id="main">
  <slot />
</div>

<div class="footer">
  <p>&copy; Foxscotch</p>
</div>


<style>
  #main {
    padding: 10px;
  }

  .footer {
    width: 100%;
    border-top: var(--standard-border);
    text-align: center;
    padding: 4px 0 4px;
  }
</style>
