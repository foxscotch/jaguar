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

<style>
  #main {
    padding: 10px;
  }
</style>
