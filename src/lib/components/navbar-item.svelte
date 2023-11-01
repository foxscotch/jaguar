<script lang="ts">
  export let primary = false;
</script>

<li class:primary>
  <slot></slot>
</li>

<style>
  li {
    padding: 4px 8px 4px;
    border-right: var(--standard-border);
  }

  li:last-child {
    border-right: none;
  }

  li.primary {
    font-family: var(--theme-font-family-heading);
    font-weight: bold;
  }
</style>
