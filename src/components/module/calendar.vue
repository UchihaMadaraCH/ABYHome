<template>
	<div>
    <div class="block">
   <!-- <p>组件值：{{ value13 }}</p>-->
    <el-date-picker
     :style="selfstyle"
      v-model="value13"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				selfstyle:{
					width:"328",
					height:'72px',
					color:'black',
					
				},
				 value13: ''
			};
		}
	};
</script>

<style>
	.el-range-input{
		color: black !important;
		font-size: 16px !important;
		
	}
	.el-input__inner{
		border:none !important;
	}
	.el-range-separator{
		height: 72px !important;
		line-height: 72px !important;
		font-weight: 800 !important;
	}
	.el-date-editor .el-range__icon{
		color: black !important;
		font-size: 18px !important;
	}
	/*.el-range-separator{
		position: relative !important; 
	}
	.el-picker-panel__body-wrapper{
		position: absolute !important;
		left: 20px !important;
	}*/
	.el-range-input::-webkit-input-placeholder {
		font-weight: 800 !important;
		color: black !important;
	}
</style>