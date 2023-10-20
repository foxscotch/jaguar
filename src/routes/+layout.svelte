<script lang="ts">
  import "../app.css";

  import type { LayoutData } from "./$types";

  import Header from "./header.svelte";
  import Sidebar from "./sidebar.svelte";
  import Footer from "./footer.svelte";

  export let data: LayoutData;
</script>

<Header/>
<Sidebar/>
<slot />
<Footer/>
