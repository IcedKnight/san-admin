<template>
  <div class="app-container">
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
