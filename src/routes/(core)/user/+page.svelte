<script lang="ts">
  import FormField from "$lib/components/form-field.svelte";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;
</script>

<form method="POST" action="?/createUser">
  <FormField name="username" />
  <FormField name="password" />
  <FormField name="passwordConfirmation" error={form?.nonMatchingPasswords} />
  <button type="submit" class="btn variant-filled">Submit</button>
</form>

<p class="tall">really tall element</p>

<style>
  .tall {
    height: 3000px;
  }
</style>