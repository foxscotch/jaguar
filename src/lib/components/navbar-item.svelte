<script lang="ts">
  export let primary = false;
</script>

<li class:primary>
  <slot></slot>
</li>

<style>
  li {
    padding: 4px 8px 4px;
    border-left: 1px solid black;
  }

  li:first-child {
    border-left: none;
  }

  li.primary {
    font-family: var(--theme-font-family-heading);
    font-weight: bold;
  }
</style>
