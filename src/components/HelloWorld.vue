<template>
	<div class="contaion">
		<div class="hello">
			<div class="binner">
				<div class="nav">
					<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: 2em; width: 2em; display: block; fill: white;">
						<path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
					</svg>

					<div :class="[onchange?'search-1':'search']">
						<div :class="[onchange?'icon-lab':'icon-lab-1','iconfont']">&#xe6cf;</div>

						<input type="text" name="search" @blur="SearchBlur" @focus="Searchfocus" ref="seaPut" :class="[onchange?'':'search-input-1','search-input']" autocomplete="off">

						<ul :class="[onchange?'search-lately-1':'search-lately']">最近搜索
							<li class="iconfont">&#xe625; 成都-房源-1</li>
							<li class="iconfont">&#xe625; 成都-房源-2</li>
							<li class="iconfont">&#xe625; 成都-房源-3</li>
						</ul>
					</div>

					<div class="nav-item">
						<ul class="nav-ul">
							<li>人民币-￥</li>
							<li>手机端</li>
							<li>出租房源</li>
							<li>开展体验</li>
							<li>故事</li>
							<li>帮助</li>
							<li>注册</li>
							<li>登陆</li>
						</ul>
					</div>
				</div>

				<div class="progress-bar">
					<div class="bar">
						<div class="progress" :style="{width:progress_0+'%'}">
							<!-- <b>{{progress_0}}%</b> -->
						</div>
					</div>
					<div class="bar">
						<div class="progress" :style="{width:progress_1+'%'}">
							<!-- <b>{{progress_1}}%</b> -->
						</div>
					</div>
					<div class="bar">
						<div class="progress" :style="{width:progress_2+'%'}">
							<!-- <b>{{progress_2}}%</b> -->
						</div>
					</div>
				</div>
			</div>
			<swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.swiperList"  class="swiper-img">
				<!-- slides -->
				<swiper-slide v-for="item of swiperList.swiperList"  :key="item.id"  >
					<img :src="item.imgUrl" class="binner-img" alt>
					<div class="swiper-info">
						<p>{{item.text1}}</p>
						<p>{{item.text2}}</p>
						<div class="s-info-lij">立即领取</div>
					</div>
				</swiper-slide>
				
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
				<div class="swiper-scrollbar" slot="scrollbar"></div>
			</swiper>

		</div>
		<home-one></home-one>
	</div>
</template>
<script>
	import { mapState, mapMutations, mapGetters, mapActions, } from 'vuex'
	export default {
		name: "HelloWorld",
		data() {
			const self = this;
			return {
				seaPutWidth: 0,
				onchange: false,
				search: "search",
				index: 0,
				progress_0: 0,
				progress_1: 0,
				progress_2: 0,
				swiperList: {},
				time: null,
				time1: null,
				time2: null,
				swiperOption: {
					pagination: ".swiper-pagination",
					effect: "fade",
					observer: true, //修改swiper自己或子元素时，自动初始化swiper  
					observeParents: true,
					slidesPerView: 'auto',
					autoplay: {
						delay: 5000, //1秒切换一次
						disableOnInteraction: false
					},
					loop: true,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					on: {
						//获得轮播索引
						slideChangeTransitionEnd: function(swiper) {
							if(this.activeIndex === 4) {
								this.activeIndex = 1;
							}
							self.index = this.activeIndex;
							// console.log(this.index);
						}
					}
				}
			};
		},
		methods: {

			SearchBlur() {
				this.onchange = false;
				this.search = "search";
			},
			Searchfocus() {
				this.onchange = true;
				this.search = "search-1";
			}
		},
		computed: {
			...mapState([
				"data"
			]),
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},

		components: {
			HomeOne: () => import("./Home_1")
		},

		watch: {
			data(val){
				
				this.swiperList = val
				console.log(this.swiperList.swiperList.length)
			},
			index(newName) {
				var ma_bar = params => {
					clearInterval(this.time);
					this.time = setInterval(() => {
						switch(params) {
							case 1:
								this.progress_0 += 10;
								this.progress_1 = 0;
								this.progress_2 = 0;

								break;
							case 2:
								this.progress_0 = 0;
								this.progress_1 += 10;
								this.progress_2 = 0;
								break;
							case 3:
								this.progress_0 = 0;
								this.progress_1 = 0;
								this.progress_2 += 10;
								// break :
						}
					}, 480);
				};
				if(newName === 1) {
					ma_bar(1);
				} else if(newName === 2) {
					ma_bar(2);
				} else if(newName === 3) {
					ma_bar(3);
				}

				// console.log(this.progress_0, this.progress_1, this.progress_2, newName);
			}
		},
		created() {},

		mounted() {
			 this.$store.dispatch('getdata')
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.binner {
		padding: 0;
		margin: 0;
		width: 1240px;
		height: 500px;
	}
	
	.nav {
		position: relative;
		left: 40px;
		top: 20px;
		z-index: 1000;
	}
	
	.binner-img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	
	.search {
		position: absolute;
		width: 250px;
		z-index: 30;
		top: -10px;
		left: 50px;
	}
	
	.icon-lab {
		display: block;
		width: 30 0px;
		height: 50px;
		line-height: 50px;
		font-size: 35px;
		text-align: left;
		background: white;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	
	.icon-lab {
		display: block;
		width: 30 0px;
		height: 50px;
		line-height: 50px;
		font-size: 35px;
		text-align: left;
		background: white;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	
	.icon-lab {
		display: block;
		width: 30 0px;
		height: 50px;
		line-height: 50px;
		font-size: 35px;
		text-align: left;
		background: white;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	
	.icon-lab-1 {
		display: block;
		width: 30 0px;
		height: 50px;
		line-height: 50px;
		font-size: 35px;
		text-align: left;
		background: white;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		border-bottom-left-radius: 3px;
	}
	
	.search-input {
		padding: 0;
		margin: 0;
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0px;
		right: -40px;
		z-index: 1000000;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 0px;
		border: none;
		outline: none;
	}
	
	.search-input-1 {
		padding: 0;
		margin: 0;
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0px;
		right: -40px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		border: none;
		outline: none;
	}
	
	.search-1 {
		position: absolute;
		width: 400px;
		top: -10px;
		left: 50px;
		transition: width 300ms ease-in !important;
	}
	
	.nav-ul {
		position: absolute;
		top: -30px;
		right: 0;
		list-style: none;
		color: white;
	}
	
	.nav-ul li {
		float: left;
		padding: 20px;
	}
	
	.search-lately {
		display: none;
		margin: 0;
		padding-top: 10px;
		position: absolute;
		z-index: 10000;
		width: 0;
		height: 0;
		overflow: hidden;
		opacity: 0;
		background: white;
		list-style: none;
		font-size: 12px;
		font-weight: bold;
		border-radius: 0 0 4px 4px !important;
	}
	
	.search-lately-1 {
		margin: 0;
		padding-top: 10px;
		position: absolute;
		z-index: 1;
		width: 400px;
		height: 100px;
		background: white;
		list-style: none;
		font-size: 12px;
		font-weight: bold;
		border-radius: 0 0 4px 4px !important;
		animation-name: fadeIn;
		/*动画名称*/
		animation-duration: 300ms;
		/*动画持续时间*/
		animation-iteration-count: 1;
		/*动画次数*/
		animation-delay: 0s;
		/*延迟时间*/
	}
	
	.search-lately li {
		height: 50px;
		line-height: 40px;
	}
	
	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
			/*初始状态 透明度为0*/
		}
		50% {
			opacity: 0;
			/*中间状态 透明度为0*/
		}
		100% {
			opacity: 1;
			/*结尾状态 透明度为1*/
		}
	}
	
	.swiper-img {
		width: 100%;
		height: 600px;
		left: -8px;
		top: -500px;
		z-index: 10 !important;
	}
	
	.swiper-info {
		position: absolute;
		left: 200px;
		top: 200px;
		font-size: 32px;
		font-weight: 600px;
		color: white;
	}
	
	.swiper-info p {
		margin: 0;
	}
	
	.swiper-info div {
		margin-top: 32px;
	}
	
	.s-info-lij {
		width: 80px;
		height: 30px;
		font-size: 20px;
		background: rgb(255, 95, 95);
		border-radius: 4px;
		padding: 10px 20px;
	}
	
	.s-info-CK {
		width: 80px;
		height: 30px;
		font-size: 20px;
		font-weight: 600px;
		border: 2px solid white;
		border-radius: 4px;
		padding: 10px 20px;
	}
	
	.progress-bar {
		position: absolute;
		left: 193px;
		top: 510px;
		z-index: 30;
		width: 176px;
		height: 2px;
	}
	
	.bar {
		float: left;
		width: 30%;
		height: 100%;
		margin-left: 2%;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		/* background-color: #ddd; */
	}
	
	.progress {
		background-color: white;
		border-radius: 10px;
		height: 2px;
		line-height: 20px;
	}
	
	b {
		color: #fff;
		font-weight: 100;
		font-size: 12px;
		position: absolute;
		left: 40%;
	}
</style>