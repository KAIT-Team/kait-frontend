<template>
  <div class="error-container">
    <div class="error-mobile">
      <div class="error-nav">{{ pathToHome() }}</div>
      <div class="error-body">
        <h1>500</h1>
        <p>Oppss.. sepertinya ada masalah</p>
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
  name: 'InternalServerError',
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
@import '@/assets/scss/errors/500.scss';
</style>
