<template>
  <div class="error-container">
    <div class="error-mobile">
      <div class="error-nav">{{ pathToHome() }}</div>
      <div class="error-body">
        <h1>503</h1>
        <p>Internal Server Error</p>
        <div>
          <button
            @click="redirectToHome()"
            class="error-btn-body hover:opacity-75"
          >
            Go Back
          </button>
        </div>
      </div>
      <div class="error-footer">
        <img src="@/assets/img/logo.svg" alt="" />
        <div class="error-body-footer">
          Komunitas Anak IT
          <p>Mengajar</p>
        </div>
        <div class="error-footer-bottom">
          <div class="alert">
            i
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    pathToHome() {
      return `${this.$router.history.current.path}`
    },
    redirectToHome() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="scss" scoped>
.error-container {
  background: rgb(191, 97, 106);
  background: linear-gradient(
    90deg,
    rgba(191, 97, 106, 0.5) 0%,
    rgba(208, 135, 112, 0.5) 100%
  );
  @apply h-screen flex flex-col;

  .error-mobile {
    height: 80%;
    @apply w-9/12 max-w-lg m-auto bg-white rounded-lg flex flex-col;

    .error-nav {
      color: #232323;
      @apply text-center p-2 font-semibold;
    }

    .error-body {
      height: 28rem;
      background: rgba($color: #bf616a, $alpha: 0.4);
      @apply flex flex-col justify-center items-center;

      h1 {
        @screen sm {
          font-size: 6rem;
        }

        @apply text-6xl font-bold;
      }

      p {
        @apply text-xl -mt-5;
      }

      .error-btn-body {
        border-color: rgba($color: #000000, $alpha: 0.2) !important;
        @apply px-3 mt-4 rounded border-2 bg-white;
      }
    }

    .error-footer {
      background: rgb(61, 187, 239);
      background: linear-gradient(
        90deg,
        rgba(#ffffff, 1) 0%,
        rgba(#bf616a, 0.3) 100%
      );

      @apply flex items-center p-3 rounded-b-lg;

      img {
        height: 3.5rem;
        @apply mr-3;
      }

      .error-body-footer {
        @apply w-4/5 text-base;
      }

      .error-footer-bottom {
        @apply flex justify-center;

        .alert {
          line-height: 2rem;
          @apply w-8 h-8 bg-gray-500 text-center text-white font-bold rounded-full;
        }
      }
    }
  }
}
</style>
