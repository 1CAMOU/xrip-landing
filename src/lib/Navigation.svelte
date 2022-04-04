<script>
  import { page } from "$app/stores";
</script>

<nav
  class="h-16 flex items-center w-full bg-white bg-opacity-5 border-b border-b-white border-opacity-10 backdrop-blur-sm"
>
  <div
    class="max-w-7xl mx-auto h-full px-12 flex justify-between items-center w-full"
  >
    <div class="flex items-center h-full">
      <a href="/">
        <img src="/logo.svg" alt="xrip logo" class="h-6 mr-16" />
      </a>

      <a
        href="/"
        class="text-white text-opacity-80 hover:text-opacity-100 transition h-full pt-5 {$page
          .url.pathname == '/'
          ? 'border-b-2 border-xrip'
          : ''}">Home</a
      >
    </div>

    <div class="flex justify-between items-center">
      <a href="https://app.x.rip/login" class="text-white">Login</a>
      <a
        href="https://app.x.rip/register"
        class="border border-xrip hover:bg-xrip transition px-4 py-1 text-white rounded-md ml-6"
      >
        Sign up
      </a>
    </div>
  </div>
</nav>
