<script>
  import "@fontsource/inter/variable-full.css";
  import "../app.css";
  import Navigation from "$lib/Navigation.svelte";
</script>

<div>
  <Navigation />

  <main>
    <slot />
  </main>
</div>
