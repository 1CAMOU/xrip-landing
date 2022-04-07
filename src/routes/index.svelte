<script>
  let playingVideo = false;

  function toggleVideo() {
    playingVideo = !playingVideo;
    const video = document.querySelector("#video");

    if (playingVideo) {
      video.play();
      video.volume = 0.2;
    } else {
      video.pause();
    }
  }
</script>

<header class="mt-20 flex flex-col justify-center items-center">
  <h1
    class="text-center mx-auto text-white font-extrabold font-heading text-5xl"
  >
    The incentivized Gaming Community<br />
    you waited for.
  </h1>

  <p
    class="text-center mx-auto text-soft-white text-opacity-80 max-w-2xl mt-6 text-lg px-8 lg:px-4"
  >
    x.rip is the most diverse gaming network around. If you are looking for
    regular tournaments, a large community and the thrill, this is the place for
    you.
  </p>

  <div class="px-3 py-4 border border-xrip border-dashed rounded-lg mt-12">
    <a
      href="https://discord.gg/Ah4UggdepF"
      target="_blank"
      class="py-2 px-16 text-lg text-center text-white mx-auto bg-xrip rounded-md relative group"
    >
      <div
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full bg-xrip blur-md opacity-0 group-hover:opacity-80 transition -z-10"
      />

      Get Started
    </a>
  </div>

  <div
    class="w-[48vw] h-[30rem] relative flex items-center justify-center mt-24"
  >
    <div
      class="absolute -z-10 -top-24 left-0 right-0 bottom-0 motion-reduce:opacity-30 animate-fade-in-bounce motion-reduce:animate-none blur-[160px] opacity-0 select-none pointer-events-none will-change-contents"
      style="backface-visibility: hidden; background: conic-gradient( from 230.29deg at 51.63% 52.16%, #D13F62 0deg, #e85679 67.5deg, #ca24d6 198.75deg, #f21877 251.25deg, #d62472 301.88deg, #ca24d6 360deg ); transform: translate3d(0,0,0);"
    />

    <!-- Top -->
    <div
      class="absolute w-screen -top-6 h-[1px]"
      style="background: linear-gradient(270deg, rgba(182, 252, 34, 0) 0%, #D13F62 48.44%, rgba(182, 252, 34, 0) 100%);"
    />

    <div
      class="absolute w-[70vw] opacity-50 -top-12 h-[1px]"
      style="background: linear-gradient(270deg, rgba(182, 252, 34, 0) 0%, #D13F62 48.44%, rgba(182, 252, 34, 0) 100%);"
    />

    <!-- Bottom -->
    <div
      class="absolute w-screen -bottom-6 h-[1px]"
      style="background: linear-gradient(270deg, rgba(182, 252, 34, 0) 0%, #D13F62 48.44%, rgba(182, 252, 34, 0) 100%);"
    />

    <div
      class="absolute w-[70vw] opacity-50 -bottom-12 h-[1px]"
      style="background: linear-gradient(270deg, rgba(182, 252, 34, 0) 0%, #D13F62 48.44%, rgba(182, 252, 34, 0) 100%);"
    />

    <!-- Left -->
    <div
      class="hidden md:block absolute h-screen w-[1px] -top-44 -left-[7rem]"
      style="background: linear-gradient(180deg, rgba(182, 252, 34, 0) 0%, #D13F62 48.44%, rgba(182, 252, 34, 0) 100%);"
    />

    <!-- Right -->
    <div
      class="hidden md:block absolute h-screen w-[1px] -top-44 -right-[7rem]"
      style="background: linear-gradient(180deg, rgba(182, 252, 34, 0) 0%, #D13F62 48.44%, rgba(182, 252, 34, 0) 100%);"
    />

    <div
      class="h-[30rem] w-screen lg:w-[55rem] absolute top-0 rounded-lg overflow-hidden animate-fade-in-slow opacity-0"
    >
      <!-- Video -->
      <div class="w-full h-full scale-105 ">
        <div
          on:click={toggleVideo}
          class="w-full h-full relative cursor-pointer group"
        >
          <video id="video" class="w-full h-full z-30" volume="0.2">
            <track kind="captions" />
            <source src="/media.mp4" type="video/mp4" class="rounded-lg" />
          </video>

          <div
            class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"
          >
            {#if playingVideo}
              <svg
                class="pointer-events-none opacity-0 transition group-hover:opacity-100"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="17"
                  cy="17"
                  r="16.5"
                  fill="#D13F62"
                  fill-opacity="0.1"
                  stroke="#D13F62"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7917 11L13.7856 11C13.7528 11 13.7277 11 13.705 11.0004C12.2214 11.0246 11.0246 12.2214 11.0004 13.705C11 13.7277 11 13.7528 11 13.7856L11 13.7917V20.2083L11 20.2144C11 20.2472 11 20.2723 11.0004 20.295C11.0246 21.7786 12.2214 22.9754 13.705 22.9996C13.7276 23 13.7527 23 13.7854 23H13.7857H13.7917H13.7977H13.798C13.8306 23 13.8557 23 13.8783 22.9996C15.3619 22.9754 16.5587 21.7786 16.583 20.295C16.5833 20.2723 16.5833 20.2471 16.5833 20.2144V20.2083V18.1667C16.5833 17.7525 16.2475 17.4167 15.8333 17.4167C15.4191 17.4167 15.0833 17.7525 15.0833 18.1667V20.2083C15.0833 20.25 15.0833 20.2618 15.0832 20.2705C15.0721 20.9448 14.5281 21.4888 13.8538 21.4998C13.8451 21.5 13.8333 21.5 13.7917 21.5C13.75 21.5 13.7382 21.5 13.7295 21.4998C13.0552 21.4888 12.5112 20.9448 12.5002 20.2705C12.5 20.2618 12.5 20.25 12.5 20.2083V13.7917C12.5 13.75 12.5 13.7382 12.5002 13.7295C12.5112 13.0552 13.0552 12.5112 13.7295 12.5002C13.7382 12.5 13.75 12.5 13.7917 12.5C13.8333 12.5 13.8451 12.5 13.8538 12.5002C14.5281 12.5112 15.0721 13.0552 15.0832 13.7295C15.0833 13.7382 15.0833 13.75 15.0833 13.7917V15.8333C15.0833 16.2475 15.4191 16.5833 15.8333 16.5833C16.2475 16.5833 16.5833 16.2475 16.5833 15.8333V13.7917V13.7856C16.5833 13.7529 16.5833 13.7277 16.583 13.705C16.5587 12.2214 15.3619 11.0246 13.8783 11.0004C13.8557 11 13.8305 11 13.7978 11L13.7917 11ZM20.2083 11L20.2022 11C20.1695 11 20.1443 11 20.1217 11.0004C18.6381 11.0246 17.4413 12.2214 17.417 13.705C17.4167 13.7277 17.4167 13.7528 17.4167 13.7856V13.7917V15.8333C17.4167 16.2475 17.7525 16.5833 18.1667 16.5833C18.5809 16.5833 18.9167 16.2475 18.9167 15.8333V13.7917C18.9167 13.75 18.9167 13.7382 18.9168 13.7295C18.9279 13.0552 19.4719 12.5112 20.1462 12.5002C20.1549 12.5 20.1667 12.5 20.2083 12.5C20.25 12.5 20.2618 12.5 20.2705 12.5002C20.9448 12.5112 21.4888 13.0552 21.4998 13.7295C21.5 13.7382 21.5 13.75 21.5 13.7917V20.2083C21.5 20.25 21.5 20.2618 21.4998 20.2705C21.4888 20.9448 20.9448 21.4888 20.2705 21.4998C20.2618 21.5 20.25 21.5 20.2083 21.5C20.1667 21.5 20.1549 21.5 20.1462 21.4998C19.4719 21.4888 18.9279 20.9448 18.9168 20.2705C18.9167 20.2618 18.9167 20.25 18.9167 20.2083V18.1667C18.9167 17.7525 18.5809 17.4167 18.1667 17.4167C17.7525 17.4167 17.4167 17.7525 17.4167 18.1667V20.2083V20.2144C17.4167 20.2472 17.4167 20.2723 17.417 20.295C17.4413 21.7786 18.6381 22.9754 20.1217 22.9996C20.1443 23 20.1696 23 20.2023 23H20.2083H20.2143H20.2146C20.2473 23 20.2724 23 20.295 22.9996C21.7786 22.9754 22.9754 21.7786 22.9996 20.295C23 20.2723 23 20.2471 23 20.2144V20.2083V13.7917V13.7856C23 13.7529 23 13.7277 22.9996 13.705C22.9754 12.2214 21.7786 11.0246 20.295 11.0004C20.2723 11 20.2472 11 20.2144 11L20.2083 11Z"
                  fill="#D13F62"
                />
              </svg>
            {:else}
              <svg
                class="pointer-events-none opacity-0 group-hover:opacity-100 transition"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="17"
                  cy="17"
                  r="16.5"
                  fill="#D13F62"
                  fill-opacity="0.1"
                  stroke="#D13F62"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9957 10.1873C15.6465 10.3951 16.3814 10.7717 17.2297 11.2511C17.5903 11.4549 17.7174 11.9124 17.5136 12.273C17.3098 12.6336 16.8523 12.7607 16.4917 12.5569C15.6489 12.0807 15.0305 11.773 14.5395 11.6162C14.0624 11.4639 13.7843 11.4797 13.5767 11.5591C13.4166 11.6203 13.2669 11.7056 13.1328 11.8121C12.973 11.9389 12.8309 12.1424 12.7226 12.5474C12.6103 12.9675 12.5503 13.5438 12.5228 14.3525C12.5087 14.7665 12.1617 15.0907 11.7477 15.0766C11.3337 15.0625 11.0096 14.7154 11.0237 14.3015C11.052 13.4704 11.115 12.7525 11.2735 12.1599C11.436 11.5521 11.7126 11.0243 12.2001 10.6373L12.2001 10.6373C12.4543 10.4355 12.7379 10.2738 13.0411 10.158C13.6786 9.91429 14.3309 9.97503 14.9957 10.1873ZM18.3824 12.7889C18.5934 12.4324 19.0534 12.3145 19.4098 12.5254C20.5713 13.2129 21.5069 13.7795 22.1687 14.3187C22.8362 14.8625 23.3417 15.4698 23.4639 16.2731L22.7863 16.3762L23.4639 16.2731C23.512 16.5892 23.512 16.9108 23.4639 17.227L22.7225 17.1142L23.4639 17.227C23.3335 18.0837 22.7674 18.7184 22.0285 19.2929C21.3002 19.8592 20.2636 20.471 18.9673 21.2361L18.919 21.2646L18.8704 21.2932C17.5331 22.0825 16.4655 22.7126 15.5953 23.0862C14.7147 23.4642 13.8662 23.6575 13.0411 23.3421C12.7379 23.2262 12.4543 23.0646 12.2001 22.8628L12.6664 22.2754L12.2001 22.8628C11.5307 22.3313 11.25 21.6069 11.1219 20.6952C11 19.828 11 18.6612 11 17.1207L11 17.0529C11 16.6387 11.3358 16.3029 11.75 16.3029C12.1642 16.3029 12.5 16.6387 12.5 17.0529C12.5 18.6772 12.5018 19.7364 12.6073 20.4863C12.7082 21.2043 12.8857 21.4919 13.1328 21.688C13.2669 21.7945 13.4166 21.8798 13.5767 21.941C13.845 22.0435 14.2324 22.0389 15.0036 21.7078C15.7747 21.3768 16.7596 20.7972 18.1566 19.9728C19.5122 19.1727 20.4646 18.6089 21.1078 18.1088C21.7494 17.6098 21.9384 17.2815 21.981 17.0013C22.0063 16.8348 22.0063 16.6653 21.981 16.4988C21.9411 16.2369 21.7735 15.9315 21.2213 15.4816C20.6634 15.0271 19.8327 14.5188 18.6458 13.8163C18.2894 13.6053 18.1714 13.1454 18.3824 12.7889Z"
                  fill="#D13F62"
                />
              </svg>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-[30rem] w-[55rem] rounded-lg bg-transparent absolute top-0 border border-xrip opacity-50 pointer-events-none"
    />
  </div>
</header>

<section
  class="relative mt-20 flex flex-col justify-center items-center py-20 shadow-md backdrop-blur-sm"
  style="background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.6) 100%);"
>
  <div
    class="h-[1px] w-screen bg-xrip absolute top-0 left-0"
    style="background: linear-gradient(to right, black, #D13F62, black);"
  />

  <p class="text-xrip font-medium uppercase">What we offer</p>
  <h1
    class="text-center mx-auto px-4 text-white font-extrabold font-heading text-5xl mt-4"
  >
    It is as cool as it looks. Really.
  </h1>

  <p
    class="text-center mx-auto text-soft-white text-opacity-80 max-w-2xl mt-6 text-lg px-8 lg:px-4"
  >
    Everything you need to be a part of the fastest growing gaming community. A
    wide range of events and interactions make us stand out.
  </p>

  <div class="mt-12 relative">
    <div
      class="absolute w-[95%] h-[70%] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-xrip blur-[80px]"
      style="background: radial-gradient(77.4% 127.39% at 47.38% 12.62%, rgba(253, 96, 134, 0.3) 0%, rgba(146, 11, 43, 0.251563) 56.77%, rgba(209, 63, 98, 0) 100%)"
    />

    <div
      class="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center space-y-8 lg:space-x-8 lg:space-y-0"
    >
      <!-- Discord Community -->
      <div class="pt-4">
        <div
          class="flex flex-col items-center justify-center rounded-lg bg-white backdrop-blur-sm bg-opacity-10 w-80 h-48 relative"
        >
          <div class="absolute -top-6">
            <span
              class="inline-flex items-center justify-center rounded-md bg-xrip p-3 shadow-lg"
            >
              <svg
                class="h-6 w-6 text-white"
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6361 1.42375C17.212 0.758625 15.6893 0.275242 14.0973 0C13.9018 0.352851 13.6734 0.827443 13.5159 1.20498C11.8236 0.95093 10.1469 0.95093 8.48573 1.20498C8.32828 0.827443 8.09468 0.352851 7.89742 0C6.30374 0.275242 4.77928 0.760401 3.35518 1.42727C0.482756 5.76019 -0.29591 9.98549 0.0934236 14.1508C1.99856 15.571 3.84488 16.4337 5.66003 16.9983C6.1082 16.3825 6.50791 15.728 6.85225 15.0382C6.19644 14.7895 5.56832 14.4825 4.97482 14.1261C5.13227 14.0097 5.28628 13.8879 5.43508 13.7627C9.05501 15.4528 12.9882 15.4528 16.5648 13.7627C16.7154 13.8879 16.8694 14.0097 17.0251 14.1261C16.4299 14.4842 15.8 14.7912 15.1442 15.04C15.4886 15.728 15.8865 16.3843 16.3364 17C18.1533 16.4355 20.0014 15.5728 21.9065 14.1508C22.3633 9.32214 21.1261 5.13565 18.6361 1.42375ZM7.34541 11.5892C6.25874 11.5892 5.36759 10.5765 5.36759 9.34331C5.36759 8.11012 6.23972 7.0957 7.34541 7.0957C8.45114 7.0957 9.34226 8.10835 9.32323 9.34331C9.32495 10.5765 8.45114 11.5892 7.34541 11.5892ZM14.6545 11.5892C13.5678 11.5892 12.6767 10.5765 12.6767 9.34331C12.6767 8.11012 13.5488 7.0957 14.6545 7.0957C15.7602 7.0957 16.6514 8.10835 16.6323 9.34331C16.6323 10.5765 15.7602 11.5892 14.6545 11.5892Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          <div class="-mt-4 flex flex-col items-center justify-center">
            <h3 class="mt-8 text-lg font-medium tracking-tight text-white">
              Discord Community
            </h3>
            <p
              class="mt-5 text-base text-soft-white text-opacity-80 text-center"
            >
              Join our Discord community<br /> and connect with
              <span class="font-bold">15,343</span><br /> users worldwide
            </p>
          </div>
        </div>
      </div>

      <!-- Web Panel -->
      <div class="pt-4">
        <div
          class="flex flex-col items-center justify-center rounded-lg bg-white backdrop-blur-sm bg-opacity-10 w-80 h-48 relative"
        >
          <div class="absolute -top-6">
            <span
              class="inline-flex items-center justify-center rounded-md bg-xrip p-3 shadow-lg"
            >
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="25" height="20" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_145_161"
                      transform="translate(0 -0.0090332) scale(0.00195312 0.00244141)"
                    />
                  </pattern>
                  <image
                    id="image0_145_161"
                    width="512"
                    height="417"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </span>
          </div>

          <div class="-mt-4 flex flex-col items-center justify-center">
            <h3 class="mt-8 text-lg font-medium tracking-tight text-white">
              Web Panel
            </h3>
            <p
              class="mt-5 text-base text-soft-white text-opacity-80 text-center"
            >
              Thanks to our home-made web<br /> panel we are able to offer the
              best<br />
              network experience for you.
            </p>
          </div>
        </div>
      </div>

      <!-- Anti Cheat -->
      <div class="pt-4">
        <div
          class="flex flex-col items-center justify-center rounded-lg bg-white backdrop-blur-sm bg-opacity-10 w-80 h-48 relative"
        >
          <div class="absolute -top-6">
            <span
              class="inline-flex items-center justify-center rounded-md bg-xrip p-3 shadow-lg"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.15991 3.49908C7.54733 2.95258 9.12402 2.5 10.5 2.5C11.876 2.5 13.4527 2.95258 14.8402 3.49908C15.7892 3.87289 16.1291 4.01429 16.5518 4.39556C16.8721 4.68447 17.2668 5.26415 17.4182 5.66806C17.6153 6.19377 17.625 6.68133 17.625 7.99861L17.625 8.57224C17.625 10.9259 17.617 11.9482 17.2437 13.0532C16.9654 13.8773 16.2288 15.0979 15.6295 15.7283C14.8181 16.5817 14.2025 16.9111 12.7623 17.6699C12.2709 17.9288 11.8117 18.1416 11.4095 18.2881C10.996 18.4387 10.6937 18.5 10.5 18.5C10.3063 18.5 10.004 18.4387 9.59059 18.2881C9.18834 18.1416 8.72917 17.9288 8.23774 17.6699C6.79762 16.9111 6.18193 16.5817 5.37056 15.7283C4.77125 15.0979 4.03471 13.8773 3.75634 13.0532C3.38308 11.9482 3.37503 10.9259 3.37503 8.57224L3.37503 7.99861C3.37503 6.68133 3.38477 6.19377 3.58185 5.66806C3.73327 5.26415 4.12796 4.68447 4.44827 4.39556C4.87098 4.01429 5.21089 3.87289 6.15991 3.49908ZM10.5 1C8.84323 1 7.05861 1.53291 5.61017 2.10344L5.5506 2.1269L5.5506 2.1269C4.66577 2.47527 4.08357 2.7045 3.44362 3.28171C2.94489 3.73154 2.41306 4.51264 2.1773 5.14152C1.87456 5.94908 1.87474 6.71591 1.87502 7.88975L1.87503 7.99861L1.87503 8.57224L1.87503 8.68588C1.8749 10.8959 1.87482 12.1703 2.33523 13.5333C2.68338 14.5639 3.53389 15.9733 4.28343 16.7618C5.27434 17.8041 6.08945 18.2335 7.49822 18.9757L7.53854 18.997C8.06499 19.2743 8.58933 19.5198 9.07732 19.6975C9.55412 19.8712 10.0488 20 10.5 20C10.9512 20 11.446 19.8712 11.9228 19.6975C12.4107 19.5198 12.9351 19.2743 13.4615 18.997L13.5018 18.9757C14.9106 18.2335 15.7257 17.8041 16.7166 16.7618C17.4662 15.9733 18.3167 14.5639 18.6648 13.5333C19.1252 12.1703 19.1252 10.8959 19.125 8.68589L19.125 8.57224L19.125 7.99861L19.1251 7.88975C19.1253 6.71591 19.1255 5.94908 18.8228 5.14152C18.587 4.51264 18.0552 3.73154 17.5565 3.28171C16.9165 2.7045 16.3343 2.47527 15.4495 2.1269L15.3899 2.10344C13.9415 1.53291 12.1568 1 10.5 1ZM14.0929 8.84283C14.3858 8.54994 14.3858 8.07506 14.0929 7.78217C13.8 7.48928 13.3251 7.48928 13.0322 7.78217L9.62503 11.1893L8.40536 9.96967C8.11247 9.67678 7.6376 9.67678 7.3447 9.96967C7.05181 10.2626 7.05181 10.7374 7.3447 11.0303L9.0947 12.7803C9.3876 13.0732 9.86247 13.0732 10.1554 12.7803L14.0929 8.84283Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          <div class="-mt-4 flex flex-col items-center justify-center">
            <h3 class="mt-8 text-lg font-medium tracking-tight text-white">
              Anti Cheat
            </h3>
            <p
              class="mt-5 text-base text-soft-white text-opacity-80 text-center"
            >
              We organize tournaments with<br /> high prizes, so we monitor
              every<br />
              game with our anti-cheat clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a
    href="https://discord.gg/Ah4UggdepF"
    target="_blank"
    class="text-white text-opacity-70 mt-12 hover:text-opacity-100 transition"
    >Learn more &rarr</a
  >

  <div
    class="h-[1px] w-screen bg-xrip absolute bottom-0 left-0"
    style="background: linear-gradient(to right, black, #D13F62, black);"
  />
</section>

<section class="relative mt-20 flex flex-col justify-center items-center py-20">
  <div
    class="absolute -z-10 -top-52 h-[12rem] w-[60rem] opacity-50 blur-[130px] select-none pointer-events-none"
    style="backface-visibility: hidden; background: conic-gradient( from 230.29deg at 51.63% 52.16%, #ca24d6 0deg, #e85679 67.5deg, #D13F62 198.75deg, #f21877 251.25deg, #d62472 301.88deg, #f21877 360deg ); transform: translate3d(0,0,0);"
  />

  <h1
    class="text-center mx-auto px-4 text-white font-extrabold font-heading text-5xl mt-4"
  >
    The leading games in our community
  </h1>

  <p
    class="text-center mx-auto text-soft-white text-opacity-80 max-w-3xl mt-6 text-lg px-8 lg:px-4"
  >
    Say hello to a revolutionary gaming space where you can ignite your
    competitive passion. We currently host regular tournaments and events for
    the following games:
  </p>

  <div
    class="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center space-y-12 lg:space-y-0 lg:space-x-20 mt-12"
  >
    <a href="https://minecraft.net" target="_blank">
      <img
        src="/minecraft.png"
        alt="minecraft logo"
        class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
      />
    </a>

    <a href="https://playvalorant.com" target="_blank">
      <img
        src="/valorant.png"
        alt="valorant logo"
        class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
      />
    </a>

    <a href="https://counter-strike.net" target="_blank">
      <img
        src="/csgo.png"
        alt="counter strike logo"
        class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
      />
    </a>
  </div>
</section>

<section class="relative mt-20 flex flex-col pt-20">
  <div
    class="flex flex-col lg:flex-row justify-center lg:justify-between items-center max-w-7xl mx-auto"
  >
    <div>
      <h1
        class="px-4 text-white text-center lg:text-left font-extrabold font-heading text-5xl mt-4"
      >
        Meet the x.rip Web Panel
      </h1>
      <p
        class=" text-soft-white text-opacity-80 text-center lg:text-left max-w-3xl mt-6 text-lg px-8 lg:px-4"
      >
        A zero-downtime web app customized to your needs. Several exclusive
        Features to provide the best experience when being a x.rip Community
        Member.
      </p>

      <div class="flex flex-col space-y-8 mt-12 ml-4 px-8">
        <div class="flex">
          <svg
            class="flex-shrink-0 mr-6"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.33337 20C4.33337 24.0501 7.61662 27.3334 11.6667 27.3334C13.3187 27.3334 14.8406 26.7883 16.0661 25.8677C16.5077 25.536 17.1346 25.6251 17.4663 26.0667C17.798 26.5083 17.7089 27.1352 17.2673 27.4669C15.7073 28.6386 13.7667 29.3334 11.6667 29.3334C6.51205 29.3334 2.33337 25.1547 2.33337 20C2.33337 14.8454 6.51205 10.6667 11.6667 10.6667C16.8214 10.6667 21 14.8454 21 20C21 24.0501 24.2833 27.3334 28.3334 27.3334C32.3835 27.3334 35.6667 24.0501 35.6667 20C35.6667 15.9499 32.3835 12.6667 28.3334 12.6667C26.681 12.6667 25.1589 13.212 23.9332 14.1329C23.4917 14.4646 22.8648 14.3756 22.5331 13.934C22.2013 13.4925 22.2903 12.8656 22.7319 12.5339C24.292 11.3617 26.233 10.6667 28.3334 10.6667C33.488 10.6667 37.6667 14.8454 37.6667 20C37.6667 25.1547 33.488 29.3334 28.3334 29.3334C23.1787 29.3334 19 25.1547 19 20C19 15.9499 15.7168 12.6667 11.6667 12.6667C7.61662 12.6667 4.33337 15.9499 4.33337 20Z"
              fill="#D13F62"
            />
          </svg>

          <p class="text-soft-white text-opacity-70 max-w-md">
            <span class="text-soft-white font-medium"
              >Link your discord account.</span
            >
            Always be connected within our network by linking your discord account.
            That way you can enjoy all the features x.rip provides.
          </p>
        </div>

        <div class="flex">
          <svg
            class="flex-shrink-0 mr-6"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.8718 4.3434C29.7028 3.76165 30.2698 3.36602 30.7127 3.11269C31.1662 2.85335 31.3322 2.83992 31.3771 2.84188C31.6724 2.8548 31.9468 2.9977 32.1268 3.2322C32.1541 3.26787 32.2383 3.41152 32.2859 3.93176C32.3324 4.43992 32.3334 5.13126 32.3334 6.14571L32.3334 13.3331L32.3334 23.3331L32.3334 30.5202C32.3334 31.5346 32.3324 32.226 32.2859 32.7341C32.2383 33.2544 32.1541 33.398 32.1268 33.4337C31.9468 33.6682 31.6724 33.8111 31.3771 33.824C31.3322 33.826 31.1662 33.8125 30.7127 33.5532C30.2698 33.2999 29.7028 32.9042 28.8718 32.3225L17.6667 24.479L17.6667 12.1869L28.8718 4.3434ZM34.3334 24.3268L34.3334 30.5202L34.3334 30.5701C34.3334 31.5222 34.3334 32.306 34.2776 32.9163C34.2219 33.5253 34.0994 34.1482 33.7135 34.6512C33.1737 35.3547 32.3504 35.7833 31.4645 35.8221C30.8312 35.8498 30.2507 35.5929 29.7199 35.2893C29.1878 34.985 28.5457 34.5356 27.7656 33.9895L27.7248 33.961L16.3521 26L16 26L16 32.5002C16 34.4332 14.433 36.0002 12.5 36.0002C10.567 36.0002 9.00004 34.4332 9.00004 32.5002L9.00004 25.9994C8.22727 25.9972 7.57566 25.9872 7.02475 25.9422C6.2959 25.8827 5.65571 25.7568 5.06342 25.455C4.12261 24.9757 3.35771 24.2108 2.87834 23.27C2.57655 22.6777 2.45074 22.0375 2.39119 21.3086C2.33335 20.6008 2.33336 19.7266 2.33337 18.6428L2.33337 18.6L2.33337 18.0667L2.33337 18.0239C2.33336 16.9401 2.33335 16.0659 2.39119 15.3581C2.45074 14.6292 2.57655 13.989 2.87834 13.3967C3.35771 12.4559 4.12261 11.691 5.06342 11.2117C5.65571 10.9099 6.2959 10.7841 7.02475 10.7245C7.73263 10.6667 8.60678 10.6667 9.69056 10.6667L9.73337 10.6667L16.3509 10.6667L27.7248 2.70494L27.7657 2.67633C28.5457 2.13031 29.1878 1.68084 29.7199 1.37655C30.2507 1.07297 30.8312 0.816081 31.4645 0.843793C32.3504 0.882558 33.1737 1.31124 33.7135 2.01474C34.0994 2.51766 34.2219 3.14058 34.2776 3.74954C34.3334 4.35993 34.3334 5.14368 34.3334 6.09575L34.3334 6.14571L34.3334 12.3395C34.7098 12.3489 35.022 12.3722 35.3088 12.4292C37.2923 12.8238 38.8428 14.3742 39.2373 16.3577C39.3337 16.8425 39.3336 17.3998 39.3334 18.2174L39.3334 18.3331L39.3334 18.4489L39.3334 18.449C39.3336 19.2665 39.3337 19.8238 39.2373 20.3086C38.8428 22.2921 37.2923 23.8425 35.3088 24.2371C35.022 24.2941 34.7098 24.3174 34.3334 24.3268ZM34.3334 22.3259C34.6095 22.3185 34.7753 22.304 34.9187 22.2755C36.1087 22.0388 37.039 21.1085 37.2757 19.9184C37.3285 19.653 37.3334 19.3104 37.3334 18.3331C37.3334 17.3559 37.3285 17.0133 37.2757 16.7479C37.039 15.5578 36.1087 14.6275 34.9186 14.3908C34.7753 14.3623 34.6095 14.3478 34.3334 14.3404L34.3334 22.3259ZM15.6667 12.6667L9.73337 12.6667C8.59676 12.6667 7.80445 12.6675 7.18761 12.7179C6.58244 12.7673 6.23476 12.8595 5.9714 12.9937C5.40691 13.2813 4.94797 13.7402 4.66035 14.3047C4.52617 14.5681 4.43399 14.9158 4.38455 15.5209C4.33415 16.1378 4.33337 16.9301 4.33337 18.0667L4.33337 18.6C4.33337 19.7366 4.33415 20.5289 4.38455 21.1458C4.43399 21.7509 4.52617 22.0986 4.66035 22.362C4.94797 22.9265 5.40691 23.3854 5.9714 23.673C6.23476 23.8072 6.58244 23.8994 7.18761 23.9488C7.80445 23.9992 8.59676 24 9.73337 24L15.6667 24L15.6667 12.6667ZM11 26.0002L11 32.5002C11 33.3286 11.6716 34.0002 12.5 34.0002C13.3285 34.0002 14 33.3286 14 32.5002L14 26.0002L11 26.0002Z"
              fill="#D13F62"
            />
          </svg>

          <p class="text-soft-white text-opacity-70 max-w-md">
            <span class="text-soft-white font-medium"
              >View the latest announcements.</span
            >
            We will notify you first when there is an important message from our
            Staff team.
          </p>
        </div>

        <div class="flex">
          <svg
            class="flex-shrink-0 mr-6"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 4.33331C11.8703 4.33331 9.33328 6.87037 9.33328 9.99998C9.33328 13.1296 11.8703 15.6666 15 15.6666C18.1296 15.6666 20.6666 13.1296 20.6666 9.99998C20.6666 6.87037 18.1296 4.33331 15 4.33331ZM7.33328 9.99998C7.33328 5.7658 10.7658 2.33331 15 2.33331C19.2341 2.33331 22.6666 5.7658 22.6666 9.99998C22.6666 14.2342 19.2341 17.6666 15 17.6666C10.7658 17.6666 7.33328 14.2342 7.33328 9.99998ZM37.3737 10.9595C37.7643 11.3501 37.7643 11.9832 37.3737 12.3738L30.7475 19H35C35.5522 19 36 19.4477 36 20C36 20.5523 35.5522 21 35 21H28.3333C27.781 21 27.3333 20.5523 27.3333 20V13.3333C27.3333 12.781 27.781 12.3333 28.3333 12.3333C28.8856 12.3333 29.3333 12.781 29.3333 13.3333V17.5858L35.9595 10.9595C36.35 10.569 36.9832 10.569 37.3737 10.9595ZM11.3333 22.3333L11.1583 22.3333C9.4659 22.333 8.41342 22.3329 7.52155 22.5718C5.10591 23.2191 3.21908 25.1059 2.5718 27.5216C2.33283 28.4134 2.333 29.4659 2.33327 31.1583L2.33328 31.3333L2.33325 31.4877C2.33289 32.5783 2.33265 33.3225 2.50366 33.9607C2.96599 35.6862 4.31373 37.0339 6.03919 37.4963C6.67739 37.6673 7.42158 37.667 8.51217 37.6667H8.51224L8.66662 37.6666H21.3333L21.4877 37.6667H21.4877C22.5783 37.667 23.3225 37.6673 23.9607 37.4963C25.6862 37.0339 27.0339 35.6862 27.4962 33.9607C27.6673 33.3225 27.667 32.5783 27.6667 31.4877V31.4877L27.6666 31.3333L27.6666 31.1583C27.6669 29.4659 27.6671 28.4134 27.4281 27.5216C26.7808 25.1059 24.894 23.2191 22.4784 22.5718C21.5865 22.3329 20.534 22.333 18.8416 22.3333L18.6666 22.3333H11.3333ZM8.03919 24.5037C8.64296 24.3419 9.40896 24.3333 11.3333 24.3333H18.6666C20.5909 24.3333 21.3569 24.3419 21.9607 24.5037C23.6862 24.966 25.0339 26.3138 25.4962 28.0392C25.658 28.643 25.6666 29.409 25.6666 31.3333C25.6666 32.6377 25.658 33.0937 25.5644 33.4431C25.287 34.4784 24.4784 35.287 23.4431 35.5644C23.0936 35.6581 22.6376 35.6666 21.3333 35.6666H8.66662C7.36228 35.6666 6.90627 35.6581 6.55683 35.5644C5.52155 35.287 4.71291 34.4784 4.43551 33.4431C4.34187 33.0937 4.33328 32.6377 4.33328 31.3333C4.33328 29.409 4.34187 28.643 4.50366 28.0392C4.96599 26.3138 6.31373 24.966 8.03919 24.5037Z"
              fill="#D13F62"
            />
          </svg>

          <p class="text-soft-white text-opacity-70 max-w-md">
            <span class="text-soft-white font-medium">Invite your friends.</span
            >
            X.rip is situationally only accepting registrations through invite codes.
            Grow your team by inviting your friends.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-20 lg:mt-0 lg:ml-20 relative">
      <img src="/webpanel.png" alt="X.rip Web Panel" class="w-full" />
      <div
        class="absolute rotate-45 bottom-40 -right-64 h-[4rem] w-[45rem] opacity-100 blur-[130px] select-none pointer-events-none"
        style="backface-visibility: hidden; background: conic-gradient( from 230.29deg at 51.63% 52.16%, #ca24d6 0deg, #e85679 67.5deg, #D13F62 198.75deg, #f21877 251.25deg, #d62472 301.88deg, #f21877 360deg );"
      />
    </div>
  </div>
</section>

<section class="relative mt-20 flex flex-col py-10 px-8 lg:px-0">
  <div
    class="w-full lg:w-[60rem] lg:h-32 mx-auto rounded-lg p-1"
    style="background: linear-gradient(270deg, #3B1637 0%, #B140A3 33.41%, #6B1738 52.08%, #D13F62 69.79%, #431520 100%);"
  >
    <div
      class="w-full h-full bg-black bg-opacity-70 lg:bg-opacity-50 flex flex-col lg:flex-row items-center justify-between rounded-lg border-white border border-opacity-10 p-6"
    >
      <div class="flex flex-col justify-center">
        <p
          class="text-white text-center lg:text-left font-bold font-heading text-xl mt-1"
        >
          We’re looking for Community Members.
        </p>

        <p class="text-soft-white text-center lg:text-left text-oapcity-80">
          Join our Gaming Community and start playing in valuable tournaments.
        </p>
      </div>

      <a
        href="https://discord.gg/Ah4UggdepF"
        target="_blank"
        class="px-12 lg:px-4 py-2 bg-xrip border-xrip border bg-opacity-10 border-opacity-20 text-opacity-60 text-xrip transition hover:border-opacity-80 hover:text-opacity-100 hover:bg-opacity-20 rounded-md mt-8 lg:mt-0"
        >Join now</a
      >
    </div>
  </div>
</section>
