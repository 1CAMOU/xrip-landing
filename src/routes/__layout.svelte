<script>
  import "@fontsource/inter/variable-full.css";
  import "../app.css";
  import Navigation from "$lib/Navigation.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div>
  <Navigation />

  <main>
    <slot />
  </main>

  <Footer />
</div>
