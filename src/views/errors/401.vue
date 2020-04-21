<template>
  <div class="error-container">
    <div class="error-mobile">
      <div class="error-nav">{{ pathToHome() }}</div>
      <div class="error-body">
        <h1>401</h1>
        <p>Authentication Failed</p>
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
  name: 'FailedAuth',
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
@import '@/assets/scss/errors/404.scss';
</style>
