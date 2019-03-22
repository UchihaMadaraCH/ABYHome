<template>
	<div class="container">
		<div class="R-number" ref="R_number">
			<div class="R-n-icon iconfont">&#xe618;</div>
			<input disabled="disabled" type="text" class="R-n-person" v-model="person_numbel" />
		</div>
		<div class="ClickNumber" ref="ClickNumber" v-show="show">
			<div class="number">
				<div class="number-type">成人</div>
				<div class="event-right">
					<div class="iconfont icon-font" @click="ClickValue(1)">&#xe620;</div>
					<div class="bothway">{{value1}}</div>
					<div class="iconfont icon-font" @click="ClickValue(2)">&#xe794;</div>
				</div>
			</div>
			<div class="number">
				<div class="number-type">
					儿童
					<div class="number-little">2 - 12岁</div>
				</div>
				<div class="event-right">
					<div class="iconfont icon-font" @click="ClickValue(3)">&#xe620;</div>
					<div class="bothway">{{value2}}</div>
					<div class="iconfont icon-font" @click="ClickValue(4)">&#xe794;</div>
				</div>
			</div>
			<div class="number">
				<div class="number-type">
					婴儿
					<div class="number-little">2岁以下</div>
				</div>
				<div class="event-right">
					<div class="iconfont icon-font" @click="ClickValue(5)">&#xe620;</div>
					<div class="bothway">{{value3}}</div>
					<div class="iconfont icon-font" @click="ClickValue(6)">&#xe794;</div>
				</div>

			</div>
			<div class="number-end">
				<div class="cancel" @click="cancelClick">取消</div>
				<div class="confirm" >确定</div>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				person_numbel: '人数',
				value1: 0,
				value2: 0,
				value3: 0
			}
		},
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		updated: function() {
			if(this.value3 === 0) {
				this.person_numbel = this.value1 + this.value2 + '人'
			} else {
				this.person_numbel = this.value1 + this.value2 + '人,' + this.value3 + '一名婴幼儿'
			}

		},
		methods: {
			cancelClick(){
				this.value1=0;
				this.value2=0;
				this.value3=0;
			},
			ClickValue(possible) {
				switch(possible) {
					case 1:
						if(this.value1 === 0) {
							return
						} else {
							this.value1--
						}
						break;
					case 2:
						this.value1++
							break;
					case 3:
						if(this.value2 === 0) {
							return
						} else {
							this.value2--
						}
						break;
					case 4:
						this.value2++
							break;
					case 5:
						if(this.value3 === 0) {
							return
						} else {
							this.value3--
						}
						break;
					case 6:
						this.value3++
							break;
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 180px;
		height: 72px;
		position: relative;
		background: white;
		border-bottom: 1px solid #EBEBEB;
	}
	
	.R-number {
		display: flex;
		width: 180px;
		height: 72px;
	}
	
	.R-n-icon {
		flex: 2;
		font-size: 30px;
		text-align: center;
		height: 74px;
		line-height: 74px;
		font-weight: 800;
	}
	
	.R-n-person {
		flex: 4;
		padding: 0;
		margin: 0;
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
		font-size: 16px;
		font-weight: 800;
		cursor: pointer
	}
	
	.R-n-person:disabled {
		border: 1px solid #DDD;
		background-color: white;
		color: black;
		border: none;
	}
	
	.ClickNumber {
		position: absolute;
		padding: 30px 10px 10px 10px;
		width: 250px;
		height: 220px;
		border: 1px solid #CCCCCC;
		border-radius: 4px;
		background: white;
	}
	
	.number {
		display: flex;
		margin: 5px;
	}
	
	.number-type {
		font-size: 16px;
		width: 60px;
		height: 40px;
		/*line-height: 40px;*/
		text-align: center;
		font-weight: 800;
	}
	
	.number-little {
		font-size: 14px;
		font-weight: 400;
	}
	
	.event-right {
		display: flex;
		width: 70%;
		height: 60px;
		justify-content: flex-end
	}
	
	.icon-font {
		width: 32px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		border: 1px solid #008498;
		color: #008498;
		border-radius: 50%;
		font-weight: 800;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.bothway {
		height: 32px;
		line-height: 32px;
	}
	
	.number-end {
		display: flex;
		justify-content: space-between;
	}
	
	.cancel {
		cursor: pointer !important;
		color: #484848 !important;
		font-size:16px ;
		font-weight: 800;
		
	}
	.confirm{
		    color: #008489;
		    font-size: 16px;
		    font-weight: 800;
	}
</style>