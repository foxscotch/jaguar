<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-crimson.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import type { LayoutData } from "./$types";

  import { AppShell } from "@skeletonlabs/skeleton";

  import Header from "./header.svelte";
  import Sidebar from "./sidebar.svelte";
  import Footer from "./footer.svelte";

  export let data: LayoutData;
</script>

<AppShell>
  <Header slot="header" />
  <Sidebar slot="sidebarLeft" />
  <slot />
  <Footer slot="pageFooter" />
</AppShell>
