<template lang="html">
</template>

<script>
	export default {
		data () {
	    return {
	      bottomNav: 'movies',
	      bottomNavColor: 'movies'
	    }
	  },
	  methods: {
	    handleChange (val) {
	      this.bottomNav = val
	    }
	  }
	}
</script>
