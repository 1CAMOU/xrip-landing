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
      href=""
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
      style="backface-visibility: hidden; background: conic-gradient( from 230.29deg at 51.63% 52.16%, #D13F62 0deg, #e85679 67.5deg, #D13F62 198.75deg, #f21877 251.25deg, #d62472 301.88deg, #ca24d6 360deg ); transform: translate3d(0,0,0);"
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
