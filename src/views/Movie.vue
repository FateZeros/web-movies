<template>
	<div>
		<mu-table :fixedHeader="true" :showCheckbox="false" >
			<mu-thead>
	      <mu-tr>
	        <mu-th>电影海报</mu-th>
	        <mu-th>电影名称</mu-th>
	        <mu-th>简介</mu-th>
	        <mu-th>评分</mu-th>
	        <mu-th>操作</mu-th>
	      </mu-tr>
	    </mu-thead>
	    <mu-tbody>
	      <mu-tr v-for="movie of movies">
	        <mu-td><img class="movie-poster" :src="movie.poster"></mu-td>
	        <mu-td><h3>{{ movie.title }}</h3></mu-td>
	        <mu-td>
	          <p class="movie-introduction">{{ movie.introduction }}</p></mu-td>
	        <mu-td class="movie-rating">{{ movie.rating }}</mu-td>
	        <mu-td>
	          <mu-raised-button @click="showDetail(movie.title)" label="详细" primary/>
	          <mu-raised-button @click="openEditMovieModal(movie)" label="修改" primary/>
	          <mu-raised-button @click="removeMovie(movie)" label="删除" secondary/>
	        </mu-td>
	      </mu-tr>
	    </mu-tbody>
	  </mu-table>
		<foot-comp></foot-comp>
	</div>
</template>

<script>
	import footComp from '@/components/Footer'

	export default {
		created() {
			this.getMovies()
			document.title = this.$route.name
		},
		components: {
			footComp
		},
		data() {
			return {
				movies: []
			}
		},
		methods: {
			//获取所有电影
			getMovies() {
				this.$http.get('/api/movie')
					.then(res => {
						console.log(res.data)
						this.movies = res.data
					})
					.catch(err => {
						console.warn(err)
					})
			}
		}
	}
</script>

<style lang="css">
	.movie-cont {
		width: 100%;
		height: 100%;
	}
</style>

