<script context="module" lang="ts">
  export type InputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
</script>

<script lang="ts">
  import { startCase } from "lodash";

  export let name: string;
  export let label: string = startCase(name);
  export let type: HTMLInputElement["type"] = "text";
  export let error: boolean = false;

  const id = `${name}-form-field`;
</script>

<div class="card">
  <label for={id} class="label">
    {label}
    {#if error}
      - BAD
    {/if}
  </label>
  <input {id} {name} {type} class="input" />
</div>
