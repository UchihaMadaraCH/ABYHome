<template>
	<div class="Select">
		<div class="Select-container">
			<div class="S-hint">温馨提示：您还可以输入城市 + 景点、行政区名进行搜索，如：巴黎 埃菲尔铁塔</div>
			<div class="S-border"></div>
			<div class="S-list">
				<div class="S-I-item">
					<h4>国内热门城市</h4>
					<div class="S-I-flex" >
						<div v-for="item of site.A" >
							<div class="S-I-son"  key='item.id' @click="handleSite(item.site)">
							<div class="S-I-son-one">
								{{item.site}}
							</div>
							</div>
						</div>
						
					</div>

				</div>
				<div class="S-I-item">
					<h4>国际/港澳台热门城市</h4>
					<div class="S-I-flex" >
						<div v-for="item of site.B"  >
							<div class="S-I-son"  key='item.id' @click="handleSite(item.site)">
							<div class="S-I-son-one">
								{{item.site}}
							</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="S-I-item">
					<h4>春季好去处</h4>
					<div class="S-I-flex" >
						<div v-for="item of site.C"  >
							<div class="S-I-son"  key='item.id' @click="handleSite(item.site)">
							<div class="S-I-son-one">
								{{item.site}}
							</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="S-border"></div>
			<div class="S-record">
				<h4>最近的搜索</h4>
				<div class="S-R-item">
					<div class="S-R-i-list">
					<div class="S-R-i-list-one">
						<p>成都.房源</p>
						<p style="color: rgb(204,204,204);font-size: 12px;font-weight: 800;">任何时间</p>
					</div>
						
					</div>
					<div class="S-R-i-list">
						<div class="S-R-i-list-one">
						<p>成都.房源</p>
						<p style="color: rgb(204,204,204);font-size: 12px;font-weight: 800;">任何时间</p>
					</div>
					</div>
					<div class="S-R-i-list">
					<div class="S-R-i-list-one">
						<p>成都.房源</p>
						<p style="color: rgb(204,204,204);font-size: 12px;font-weight: 800;">任何时间</p>
					</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
               site:[]
			}
		},
		methods: {
			handleSite(stie) {
				console.log(stie)
				this.$emit('Select_stie',stie)
			},
			getHomeInfo() {
				axios.get("/static/travel.json")
					.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res) {
				 res = res.data
				if(res.ret && res.data) {
				  const data = res.data
                  this.site = data.Sites
//                console.log(this.site.A)
				}
//				console.log(res.data.data.Sites)

			}
		},
		mounted () {
			this.getHomeInfo()
		},
	}
</script>

<style>
	.Select {
		border: 1px solid #EBEBEB !important;
		border-radius: 0 0 4px 4px !important;
		background-color: #ffffff !important;
		box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3) !important;
		margin: 0px !important;
		overflow: hidden !important;
		padding: 0px !important;
		padding-top: 8px !important;
	}
	
	.Select-container {
		width: 900px;
		height: 350px;
		/*border: 1px solid black;*/
		margin: 0 auto;
		padding-top: 30px;
	}
	
	.S-hint {
		height: 30px;
		line-height: 30px;
		color: #767676;
		font-size: 12px;
		font-weight: 800;
		margin-bottom: 20px;
	}
	
	.S-border {
		width: 100%;
		height: .8px;
		background: #CCCCCC;
	}
	
	.S-list {
		display: flex;
	}
	
	.S-I-item {
		width: 300px;
	}
	
	.S-I-flex {
		display: flex;
		flex-wrap: wrap;
		margin-left: 10px;
	}
	
	.S-I-son {
		width: 70px;
		height: 50px;
	}
	
	.S-R-item {
		display: flex;
		padding-left: 20px;
	}
	
	.S-R-i-list {
		flex: 1;
	}
	
	.S-R-i-list p {
		margin: 0;
		padding: 0;
	}
	.S-I-son-one{
		width: 50px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 4px;
	}
	.S-R-i-list-one{
		width: 150px;
		height: 40px;
		padding: 5px;
		line-height: 20px;
		text-align: left;
		border-radius: 4px;
	}
	.S-R-i-list-one:hover{
		background: #cceeed;
	}
	.S-I-son-one:hover{
		background: #cceeed;
	}
</style>