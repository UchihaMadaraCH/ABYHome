<template>
	<div class="HOMe-1" @click="DocumentShow($event)">
		<div class="Housing">
			<div class="container">
				<div class="Tab">
					<div :class="[T_active?'T-001-1':'T-001']" @click="handeleClick(1)">房源</div>
					<div :class="[T_active?'T-001':'T-001-1']" @click="handeleClick(2)">体验</div>
					<div :class="[T_active?'T-003':'T-003-3']"></div>
				</div>
				<div class="reservation">
					<div class="R-site" ref='input_focus'>
						<div class="iconfont R-s-icon">&#xe625;</div>
						<input type="text" v-model="input_site" @blur="stieBlur" @focus="stiefocus" class="R-s-input" />
					</div>
					<div class="R-data">
						<!--<div class="R-d-icon iconfont">&#xe60b;</div>
						<div class="R-d-start">入住日期——</div>
						<div class="R-d-end">退房日期</div>-->
						<calendar></calendar>
					</div>
					<click-number :show="show"></click-number>
					<div class="R-search">
						<div class="R-s-search">搜索</div>
					</div>

				</div>
				<Select @Select_stie="change" v-show="handleChange"></Select>
				<!--<click-number></click-number>-->
				<div>
					<div class="hot">
						<h2>热门目的地</h2>
						<div v-show="PrevNext" class="iconfont reservation-prev" @click="handleClick($event)" ref="prev">&#xe731;</div>
						<div v-show="!PrevNext" class="iconfont reservation-next" @click="handleClick($event)" ref="next">&#xe735;</div>
						<div class="ovflew">
							<div class="bourn" ref="bourn">
								<!--:class="[T_active?'B-item':'.B-item-click ']"-->
								<div :class="[bourn===1?'B-item-click':'B-item']" @click="bournClick(1)">上海</div>
								<div :class="[bourn===2?'B-item-click':'B-item']" @click="bournClick(2)">重庆</div>
								<div :class="[bourn===3?'B-item-click':'B-item']" @click="bournClick(3)">北京</div>
								<div :class="[bourn===4?'B-item-click':'B-item']" @click="bournClick(4)">大理</div>
								<div :class="[bourn===5?'B-item-click':'B-item']" @click="bournClick(5)">曼谷</div>
								<div :class="[bourn===6?'B-item-click':'B-item']" @click="bournClick(6)">台北</div>
								<div :class="[bourn===7?'B-item-click':'B-item']" @click="bournClick(7)">伦敦</div>
								<div :class="[bourn===8?'B-item-click':'B-item']" @click="bournClick(8)">洛杉矶</div>

							</div>
						</div>

						<div class="gathered">
							<div class="B-g-item" v-for="item of gathered">
								<img class="B-g-img" :src="item.imgUrl" alt="" />
								<p class="B-g-text-1">{{item.text1}}</p>
								<h4 class="B-g-text-2">{{item.text2}}</h4>
								<div class="B-g-text-3">{{item.text3}}</div>
								<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: .6em; width: .6em; display: inline; fill: #008489;">
									<path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
								</svg>
								<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: .6em; width: .6em; display: inline; fill: #008489;">
									<path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
								</svg>
								</svg>
								<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: .6em; width: .6em; display: inline; fill: #008489;">
									<path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
								</svg>
								</svg>
								<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: .6em; width: .6em; display: inline; fill: #008489;">
									<path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
								</svg>
								<svg data-v-322d1a81="" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: 0.6em; width: 0.6em; display: inline; fill: rgb(0, 132, 137);">
									<path data-v-322d1a81="" d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
								</svg>
								{{item.text4}}
							</div>
							
						</div>

					</div>
					<div class="hot"  v-for="(item,index) of hot.title" >
						<h2>{{item.h2}}</h2>
						<p class="hot-p">住进不一样的樱花季</p>
						<div class="gathered">
							<div class="B-g-item" v-for="(item,index) of hot.bar">
								<img class="B-g-img" :src="item.images" alt="" />
								<p class="B-g-text-1">{{item.text1}}</p>
								<h4 class="B-g-text-2">{{item.text2}}</h4>
								<div class="B-g-text-3">{{item.text3}}</div>
							</div>
							

						</div>

					</div>

					<div class="pull">
						<h2>诚意推出爱彼迎Plus</h2>
						<p class="hot-p">品质和舒适性经过验证的精选房源</p>
						<div class="hot-push">
							<img style="width: 100%;height:250px;border-radius: 4px;" src="https://z1.muscache.cn/4ea/air/v2/pictures/f4d72213-3cc2-403c-8482-0e2b7bb17b67.jpg?t=c:w800-h320,r:w800-h320-sfit,e:fjpg-c75" />
							<div class="pull-svg">
								<svg viewBox="0 0 470 239" fill="#484848" height="84px" aria-label="Airbnb Plus branding" focusable="false" width="165.18828451882845px">
									<path d="M104.707 148.464c-.512-1.438-1.109-2.83-1.677-4.118a386.734 386.734 0 0 0-2.678-5.889l-.07-.152a1318.773 1318.773 0 0 0-25.22-51.674l-.374-.728c-.9-1.75-1.832-3.56-2.787-5.337-1.116-2.076-2.352-4.275-4.1-6.322-3.766-4.412-8.966-6.842-14.645-6.842s-10.88 2.431-14.648 6.845c-1.746 2.048-2.981 4.245-4.098 6.321a341.749 341.749 0 0 0-2.812 5.387l-.348.676a1319.873 1319.873 0 0 0-25.22 51.673l-.114.25a388.09 388.09 0 0 0-2.632 5.791c-.569 1.288-1.166 2.678-1.678 4.12-1.497 4.213-1.941 8.24-1.359 12.308 1.219 8.513 6.924 15.809 14.89 19.041a24.699 24.699 0 0 0 9.335 1.81c.995 0 2.007-.06 3.007-.176 3.833-.445 7.695-1.75 11.48-3.88 4.629-2.606 9.202-6.425 14.197-11.883 4.996 5.458 9.569 9.277 14.199 11.883 3.784 2.13 7.646 3.435 11.478 3.88 1 .116 2.013.175 3.008.175a24.69 24.69 0 0 0 9.334-1.809c7.965-3.231 13.671-10.528 14.891-19.041.582-4.067.137-8.093-1.36-12.31zm-51.55 6.352c-6.213-7.89-10.2-15.216-11.599-21.358-.587-2.578-.721-4.947-.398-7.041.278-1.812.9-3.431 1.848-4.815 2.145-3.127 5.938-4.994 10.15-4.994 4.209 0 8.002 1.867 10.147 4.996.949 1.383 1.57 3.003 1.849 4.815.322 2.097.187 4.466-.4 7.044-1.401 6.141-5.387 13.465-11.598 21.353zm45.897 5.35a17.098 17.098 0 0 1-10.46 13.375c-2.745 1.114-5.746 1.506-8.796 1.153-2.919-.34-5.792-1.322-8.783-3.005-4.14-2.33-8.331-5.908-13.048-11.157 7.508-9.275 12.197-17.824 13.933-25.439.794-3.481.962-6.774.5-9.788-.448-2.908-1.474-5.548-3.05-7.846-3.511-5.123-9.565-8.182-16.195-8.182-6.627 0-12.68 3.058-16.192 8.18-1.576 2.298-2.601 4.938-3.048 7.845-.464 3.01-.297 6.302.496 9.784 1.735 7.618 6.424 16.169 13.934 25.447-4.716 5.248-8.907 8.825-13.048 11.156-2.99 1.683-5.863 2.666-8.782 3.005-3.049.353-6.052-.039-8.797-1.153a17.095 17.095 0 0 1-10.46-13.376c-.418-2.923-.095-5.742 1.018-8.872.41-1.154.889-2.286 1.483-3.632.84-1.903 1.732-3.838 2.595-5.709l.116-.251a1318.605 1318.605 0 0 1 25.196-51.625l.35-.682a336.93 336.93 0 0 1 2.765-5.295c.972-1.808 1.95-3.555 3.236-5.063 2.403-2.815 5.563-4.303 9.14-4.303 3.575 0 6.734 1.487 9.137 4.302 1.287 1.508 2.265 3.255 3.236 5.061a333.39 333.39 0 0 1 2.74 5.247l.377.734a1317.39 1317.39 0 0 1 25.196 51.625l.071.155a379.704 379.704 0 0 1 2.64 5.805c.595 1.347 1.075 2.48 1.484 3.63 1.111 3.132 1.434 5.951 1.016 8.873zm194.117-43.622c0-33.068 4.234-63.313 11.695-83.88 5.04-14.316 11.492-25.002 19.961-25.002 7.46 0 11.694 8.67 11.694 22.583 0 17.744-6.049 38.713-15.928 59.482-7.26 15.323-16.736 30.244-27.02 43.754-.2-5.242-.402-10.888-.402-16.937zm-43.352 65.732c12.704-7.057 25.608-17.946 37.504-31.252 3.63 22.985 11.292 30.446 20.365 30.446 10.082 0 19.76-9.276 28.229-26.01v3.225c0 17.34 7.863 22.785 14.92 22.785 10.485 0 20.769-11.695 29.036-30.85-.202 3.428-.202 5.04-.202 7.259 0 17.542 6.452 22.784 13.912 22.784 6.856 0 12.502-4.84 18.55-14.921 1.412-2.419-.402-5.646-3.225-5.646-1.412 0-2.823.807-3.428 2.017-3.63 6.452-7.057 10.888-11.291 10.888-5.848 0-6.452-8.47-6.452-15.122 0-9.679 1.225-25.472 3.024-34.883.48-2.515-1.412-4.637-3.831-4.637-2.017 0-3.63 1.41-4.033 3.024-7.662 27.826-19.558 52.425-30.85 52.425-5.645 0-8.065-6.654-8.065-15.324 0-9.88 2.017-21.777 5.645-35.085.606-2.42-1.209-4.839-3.83-4.839-1.613 0-3.428 1.009-3.832 2.621-9.072 30.245-21.776 52.627-33.269 52.627-8.267 0-12.5-11.292-14.315-29.237 13.105-15.526 24.8-33.471 33.47-51.619 10.284-21.977 16.736-44.157 16.736-62.707C344.587 6.654 334.505 0 325.23 0c-10.888 0-20.97 10.283-28.027 29.842-7.46 21.373-12.098 52.424-12.098 86.702 0 9.275.404 17.34 1.008 24.397-12.5 14.316-26.212 26.616-39.923 34.48-1.814 1.008-2.62 3.428-1.613 5.242 1.008 1.815 3.427 2.621 5.242 1.613zm-68.353 56.054c2.218 0 4.235-1.815 4.235-4.033 0-17.743.806-35.487 2.62-52.827 36.698-3.226 78.839-38.31 78.839-74.806 0-25.204-18.147-39.52-42.141-39.52-23.39 0-53.03 14.719-77.63 39.117-1.612 1.41-1.612 4.032 0 5.645 1.413 1.613 4.034 1.613 5.647 0 22.986-22.38 50.207-36.697 71.781-36.697 19.357 0 33.874 11.493 33.874 31.455 0 32.26-36.899 63.11-69.563 66.539 3.024-25.608 7.864-50.408 14.518-72.185.604-2.016-.807-4.436-2.823-5.042-2.218-.603-4.637.606-5.243 2.622-6.654 22.583-11.694 48.19-14.921 75.008-7.863-.403-14.719-2.42-22.38-6.855-2.017-1.009-4.436-.202-5.647 1.613-1.008 2.016-.2 4.436 1.614 5.645 9.073 4.637 16.937 7.057 25.607 7.662-1.613 17.34-2.622 35.084-2.622 52.626 0 2.218 2.017 4.033 4.235 4.033zm274.22-110.697c1.614 1.21 4.235 1.008 5.444-.604 5.444-6.855 8.671-14.115 8.671-20.365 0-9.275-6.251-15.122-17.743-15.122-22.18 0-43.554 22.582-43.554 39.923 0 11.09 7.662 18.55 22.987 21.373l9.476 1.613c9.88 1.613 16.534 5.04 16.534 11.896 0 7.461-8.267 11.493-16.937 11.493-6.452 0-12.099-2.218-16.534-5.242-1.613-1.21-4.032-.807-5.242.806s-.807 4.033.806 5.242c5.646 4.235 12.905 6.856 20.97 6.856 14.315 0 25.003-8.065 25.003-19.558 0-9.275-7.058-16.333-23.39-19.155l-9.477-1.614c-9.678-1.613-16.13-5.846-16.13-13.912 0-13.913 17.744-32.06 35.285-32.06 6.05 0 9.88 2.622 9.88 8.066 0 4.234-2.42 9.679-6.653 14.92-1.21 1.614-1.009 4.033.604 5.444z"></path>
								</svg>
							</div>
							<div class="pull-btn">浏览plus房源 ></div>
						</div>

					</div>

					<div style="margin-bottom: 40px;" class="classics">
						<h2>经典旅行城市</h2>
						<div class="C-flex">
							<div class="C-f-item" v-for=" item of classics">
								<img :src="item.images" />
								<p class="C-f-site">{{item.text1}}</p>
								<p class="C-f-price">{{item.text2}}</p>
							</div>
							
						</div>

						<div class="serve">
							<div class="C-s-item">
								<img style="width: 36px;height: 36px;" src="https://z1.muscache.cn/airbnb/static/homepages/china/icons/phone_icon-1ab8d71426288cfc4b187b2228d33aa0.png" />
								<div class="C-s-text">
									<span class="C-s-t-1">24小时中文客服</span>
									<span class="C-s-t-2">400-841-0328</span>
								</div>

							</div>
							<div class="C-s-item">
								<img style="width: 36px;height: 36px;" src="https://z1.muscache.cn/airbnb/static/homepages/china/icons/alipay_icon_2x-b02a7518b9ccf6eda87a38700ee54f85.png" />
								<div class="C-s-text">
									<span class="C-s-t-1">安全支付</span>
									<span class="C-s-t-2">支付宝付款已向中国用户开通</span>
								</div>

							</div>
							<div class="C-s-item">
								<img style="width: 36px;height: 36px;" src="https://z1.muscache.cn/airbnb/static/homepages/china/icons/sesame_credit@2x-18ded65dcd6b35e51339724b059f3e8c.png" />
								<div class="C-s-text">
									<span class="C-s-t-1">芝麻信用</span>
									<span class="C-s-t-2">实名认证房东房客信息，真实可靠</span>
								</div>

							</div>
						</div>

					</div>
					<div class="Travel-story">
						<h2 style="margin: none;">精彩旅行故事</h2>
						<div class="T-set">
							<div class="T-s-item" v-for="item of Travel">
								<div class="T-s-location">
									<div class="T-s-l-praise ">
										<svg viewBox="0 0 16 16" fill="currentColor" fill-opacity="0" stroke="#ffffff" stroke-width="1" focusable="false" aria-label="赞" role="img" stroke-linecap="round" stroke-linejoin="round" style="height: 24px; width: 24px; display: block; overflow: visible;">
											<path d="m7.3 1.7c-.2.6-.2 2.3-3.5 3.4-2.7.9-3.3 3.4-3.3 5.4 0 1.8.6 5 4.8 5h6.2c.9 0 1.5-.4 1.5-1.1s-.5-1.1-1-1.1c.5 0 1.5-.1 1.5-1.1 0-1.1-1-1.1-1-1.1.8 0 1.5-.3 1.5-1.1 0-.9-.7-1.1-1.5-1.1.8 0 1.5-.3 1.5-1.1s-.8-1.1-1.5-1.1h-4.5c-.2 0-.4-.1-.4-.3-.1-.2-.1-.4 0-.5.1-.2 1.1-1 1.6-2 .3-.6.4-1.4.3-2 0-.4-.3-1.2-1.1-1.2s-1 .9-1.1 1.2z"></path>
										</svg>
									</div>
									<img style="width: 246px;height: 246px;border-radius:4px ;" :src="item.images" />
									<div class="T-s-l-btn">{{item.btn}}</div>
								</div>

								<span class="T-s-i-p1">{{item.location}}</span> <span class="T-s-i-p2">{{item.title}}</span>
								<div class="T-s-i-portrait">
									<img style="height: 20px;width: 20px;border-radius: 50%;" :src="item.userImg" />
									<div class="user">
										<span>
								<svg viewBox="0 0 16 16" role="img" aria-label="“赞”的数量" focusable="false" style="height: 1em; width: 1em; fill: rgb(118, 118, 118);">
									<path d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11"></path>
								</svg>
								{{item.praise}}
							</span>
										<span>
									<svg viewBox="0 0 16 16" role="img" aria-label="评论数量" focusable="false" style="height: 1em; width: 1em; fill: rgb(118, 118, 118);">
										<path d="m4.5 7h4c .28 0 .5.23.5.5s-.22.5-.5.5h-4c-.28 0-.5-.23-.5-.5s.22-.5.5-.5m-.5-2.5c0-.28.22-.5.5-.5h7c .28 0 .5.23.5.5s-.23.5-.5.5h-7c-.28 0-.5-.23-.5-.5m8.5-3.5h-9c-1.38 0-2.5 1.12-2.5 2.5v12c0 .25.18.45.42.49.03.01.05.01.08.01.21 0 .41-.14.47-.34.56-1.69 2.74-3.66 7.03-3.66h3.5c1.38 0 2.5-1.12 2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5"></path>
									</svg>
									{{item.info}}
								</span>

									</div>
								</div>

							</div>
							<!--?????-->

							
						</div>
						<p class="T-show">显示全部 ></p>
					</div>
					<div class="hot">
						<h2>高分体验</h2>
						<div>在下趟旅程中，不妨预订由本地达人组织的体验活动 ></div>
						<div class="gathered">
							<div class="B-g-item" v-for="item of Mark" style="width: 240px;">
								<img class="amend-img" :src="item.imgUrl" alt="" />
								<p class="amend-text-1">{{item.text1}}</p>
								<h4 class="B-g-text-2">{{item.text2}}</h4>
								<div class="B-g-text-3">{{item.text3}}</div>
								<div>
									<span style="font-size: 12px;color: #008489;font-weight: 800;">{{item.text4}}</span>
									<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: .6em; width: .6em; display: inline; fill: #008489;">
										<path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
									</svg>
									<span style="font-size: 12px;color: #CCCCCC;">{{item.text5}}</span>
								</div>
							</div>
							
							
			
						</div>

						<!--这里-->
						<p class="T-show">显示所有体验 ></p>
					</div>

					<div class="statement">
						<p class="S-p1">关于《服务条款》和《支付服务条款》公开征求意见</p>
						<p class="S-p2">我们近期公布了新版<span style="color: #008489;font-size: 14px;">《服务条款》</span >和<span style="color: #008489;font-size: 14px;">《支付服务条款》</span>，如果您对其中的修改有任何意见，请于2019年3月20日前发送邮件至yijian@airbnb.com。</p>
					</div>

					<div class="hr">
						<div class="hr-border"></div>
					</div>

					<div class="stern">
						<div class="S-item">
							<p class="S-item-ul">爱彼迎</p>
							<p class="S-item-li">工作机会</p>
							<p class="S-item-li">新闻</p>
							<p class="S-item-li">政策</p>
							<p class="S-item-li">帮助</p>
							<p class="S-item-li">多元化与归属感</p>
						</div>
						<div class="S-item">
							<p class="S-item-ul">发现</p>
							<p class="S-item-li">信任与安全</p>
							<p class="S-item-li">邀请好友</p>
							<p class="S-item-li">爱彼迎公民</p>
							<p class="S-item-li">商务差旅</p>
							<p class="S-item-li">旅游指南</p>
							<p class="S-item-li">爱彼迎杂志</p>
							<p class="S-item-li">爱彼迎活动助手<span class="S-item-new">New</span></p>
						</div>
						<div class="S-item">
							<p class="S-item-ul">出租</p>
							<p class="S-item-li">为什么要出租?</p>
							<p class="S-item-li">待客之道</p>
							<p class="S-item-li">房东义务</p>
							<p class="S-item-li">开展体验<span class="S-item-new">New</span></p>
							<p class="S-item-li">Open Homes<span class="S-item-new">New</span></p>
						</div>
						<div class="S-item">
							<p class="S-item-ul">
								<svg viewBox="0 0 32 32" role="img" aria-label="前往微博" focusable="false" style="height: 18px; width: 18px; display: inline; fill: rgb(118, 118, 118);">
									<path d="m30.85 14.19c-.15.61-.85.98-1.46.77-.64-.22-.97-.86-.76-1.5.67-2.14.27-4.05-1.21-5.7-1.37-1.56-3.5-2.17-5.47-1.78-.64.15-1.25-.28-1.37-.89-.15-.64.27-1.29.88-1.41 2.77-.61 5.68.31 7.72 2.51 1.97 2.24 2.55 5.33 1.67 8zm-4.77-5.18c-.95-1.11-2.4-1.53-3.74-1.25-.52.12-.88.61-.79 1.2.12.58.64.92 1.22.8.7-.15 1.31.06 1.82.61.49.58.61 1.23.39 1.9-.15.58.15 1.13.67 1.29a1.02 1.02 0 0 0 1.25-.67c.46-1.44.18-2.73-.82-3.86zm-9.33 13.42c-1 2.33-3.95 3.62-6.5 2.79-2.43-.77-3.53-3.22-2.43-5.42 1.06-2.11 3.8-3.31 6.2-2.69 2.52.64 3.74 3 2.73 5.33zm-5.13-1.81c-.82-.34-1.79 0-2.28.77s-.24 1.68.52 2.05 1.85 0 2.34-.77c.49-.83.24-1.72-.58-2.05zm1.94-.8c-.76-.34-1.37.8-.64 1.07.33.15.64.06.88-.31.15-.34.09-.64-.24-.77zm-.03 6.83c-5.08.52-9.45-1.78-9.79-5.18-.34-3.34 3.49-6.47 8.57-6.99 5.1-.49 9.45 1.84 9.78 5.18.34 3.34-3.55 6.5-8.57 6.99zm10.12-11.14c-.18-.03-.3-.09-.39-.13-.15-.09-.27-.28-.12-.64.52-1.32.55-2.36.03-3.06-1.06-1.44-3.68-1.38-6.81-.06l-.24.09c-.34.12-.67.03-.52-.43.52-1.66.4-2.85-.3-3.62-.89-.86-2.28-.89-4.23-.12-3.92 1.56-10.43 7.35-10.43 12.75 0 1.63.64 3.1 1.91 4.35 2.53 2.57 6.66 3.86 10.95 3.86 3.98 0 7.75-1.23 10.09-2.94 2.31-1.72 3.77-3.86 3.77-5.82 0-2.12-1.67-3.59-3.71-4.23z" fill-rule="evenodd"></path>
								</svg>
								<svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style="height: 1em; width: 1em; display: inline; fill: currentcolor;">
									<path d="m25.09 19.47c-.62 0-1.11-.53-1.08-1.16.02-.59.52-1.08 1.1-1.08.62.01 1.11.54 1.09 1.17a1.08 1.08 0 0 1 -1.1 1.07zm-6.89.01a1.12 1.12 0 0 1 -1.11-1.08 1.13 1.13 0 0 1 1.12-1.16c.62 0 1.13.53 1.1 1.17a1.12 1.12 0 0 1 -1.11 1.07zm-1.31-5.54c-4.74 3.15-5.33 9.05-1.23 12.9 2.15 2.02 4.77 2.85 7.68 2.54.96-.1 1.92-.64 2.84-.54s1.78.73 2.72 1.16c-.43-1.74-.44-2.47.48-3.3 3.16-2.85 3.46-7.35.87-10.74-2.97-3.89-9.15-4.82-13.36-2.02zm-9.74-2.66a1.32 1.32 0 0 1 -1.3-1.38 1.34 1.34 0 0 1 1.39-1.31c.73.02 1.34.67 1.32 1.39a1.36 1.36 0 0 1 -1.4 1.3zm9.89-1.36c.01.77-.56 1.36-1.32 1.37a1.35 1.35 0 0 1 -1.38-1.33c-.01-.72.61-1.36 1.34-1.37a1.33 1.33 0 0 1 1.36 1.33zm5.18 1.29a9.07 9.07 0 0 0 -1.85-4.76c-2.88-3.82-8.21-5.42-12.95-3.85-3.47 1.15-6.03 3.36-7.07 7-1.13 3.94.38 7.76 3.95 10.32.56.4.7.96.52 1.57-.25.83-.45 1.48-.66 2.47 1.17-.74 2.16-1.41 3.2-2 .31-.18.75-.22 1.11-.19 1.06.09 2.12.25 3.28.4-.27-3.17.7-5.72 2.82-7.81 2.1-2.07 4.68-2.98 7.65-3.14z" fill-rule="evenodd"></path>
								</svg>
							</p>
							<p class="S-item-li">条款</p>
							<p class="S-item-li">隐私政策</p>
							<p class="S-item-li">网站地图</p>
						</div>
					</div>
					<div class="end">
						<hr />
						<div class="vessel">
							<div class="V-icon">
								<span>
						<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: 1.5em; width: 1.5em; display: inline; fill: rgb(118, 118, 118);">
							<path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
						</svg>
					</span>
							</div>
							<div class="V-text">
								<span style="font-weight: 600;font-size: 14px;color: rgb(118,118,118);line-height: 20px;">京ICP备16017121号-3 京ICP证 160773号 <img style="display: inline ; vertical-align: middle;" src="https://a0.muscache.com/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png"/> 京公网安备 11010502032345号 安彼迎网络（北京）有限公司   <br />© Airbnb, Inc.</span>
							</div>

							<span class="language" style="margin-left: 80px;">中文 (简体)</span>
							<span class="language">CNY - ￥</span>
						</div>

					</div>
				</div>

				<div class="box" style="height: 80px;width: 400px;"></div>
			</div>
			<!--<div class="hr"></div>-->

		</div>
		<!--<div style="width: 2000px;height: 1px; background: red;"></div>-->
	</div>
</template>
<script>
	import { mapState, mapMutations, mapGetters, mapActions, } from 'vuex'
	import Select from './module/select'
	import Calendar from './module/calendar'
	import ClickNumber from './module/ClickNumber'
	export default {
		data() {
			return {
				T_active: true,
				input_site: '北京',
				handleChange: false,
				person_numbel: "试验",
				show: false,
				bourn: 0,
				PrevNext:false,
				gathered:{},
				hot:{},
				classics:{},
				Travel:{},
				Mark:{}
				//				 arr=[{date:'2018/4/1',className:"mark1"}, {date:'2018/4/13',className:"mark2"}];
			}

		},
		components: {
			Select,
			Calendar,
			ClickNumber
		},
		computed: {
			...mapState([
				"data"
			]),
		},
		mounted() {
			 this.$store.dispatch('getdata')
		},
		watch:{
			data(val){	
				this.gathered = val.gathered
				this.hot = val.hot
				this.classics = val.classics
				this.Travel = val.Travel
				this.Mark = val.Mark
				console.log(this.hot.h2)
			},
		},
		methods: {
			handleClick(e){
				console.log(e.currentTarget.className)
				if (e.currentTarget.className ==='iconfont reservation-prev') {
					this.$refs.bourn.style="transform: translateX(30px);"
					this.PrevNext = false
				}else{
					this.$refs.bourn.style="transform: translateX(-136px);"
					this.PrevNext = true
				}
			},
			bournClick(number) {
				this.bourn = number
			},
			DocumentShow(ev) {
				if(ev.target.className === "R-n-person" || ev.target.className === "R-n-icon iconfont" || ev.target.className === "ClickNumber" || ev.target.className === "iconfont icon-font") {
					this.show = true
				} else {
					this.show = false
				}
				//				console.log(ev.target.className, this.show)
			},
			change(stie) {
				this.input_site = stie
			},
			stiefocus() {
				const thea = this
				setTimeout(function() {
					thea.handleChange = true
					thea.$refs.input_focus.style.borderBottom = '2px solid #018388'
				}, 200)

			},
			stieBlur() {
				const thea = this
				setTimeout(function() {
					thea.handleChange = false
					thea.$refs.input_focus.style.borderBottom = 'none'
				}, 200)

			},
			handeleClick(index) {
				if(index == 2) {
					this.T_active = false
					//					console.log('2',index,this.T_active)
				} else {
					this.T_active = true
					//					console.log('1',index,this.T_active)
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.container>>>.wh_content_all {
		color: black !important;
		background: white;
	}
	
	.container>>>.wh_content_all>>>.wh_top_changge>>>li {
		color: black !important;
		/*background: white;*/
	}
	
	.Housing {
		position: relative;
		top: -500px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.container {
		width: 1000px;
		height: 200px;
		/*border: 1px solid red;*/
	}
	
	.Tab {
		position: relative;
		height: 45px;
		border-bottom: 1px solid #ccc;
	}
	
	.Tab .T-001,
	.T-002 {
		float: left;
		height: 40px;
		font-size: 20px;
		font-weight: 800;
		color: black;
		line-height: 40px;
		margin-right: 30px;
		margin-bottom: 20px;
	}
	
	.T-003 {
		position: absolute;
		top: 43px;
		left: 0;
		width: 40px;
		height: 2px;
		border-radius: 1.5px;
		background: #008489;
	}
	
	.T-001-1 {
		/*点击时切换*/
		float: left;
		height: 40px;
		font-size: 20px;
		font-weight: 800;
		color: #008489;
		line-height: 40px;
		margin-right: 30px;
		margin-bottom: 20px;
	}
	
	.T-003-3 {
		/*点击时切换*/
		position: absolute;
		top: 43px;
		left: 70px;
		width: 40px;
		height: 2px;
		border-radius: 1.5px;
		background: #008489;
	}
	
	.reservation {
		display: flex;
		height: 72px;
		margin-top: 40px;
		border: 1px solid #EBEBEB !important;
	}
	
	.R-site {
		display: flex;
		border-right: 1px solid #EBEBEB;
		/*border-bottom: 2px solid #018388;*/
		flex: 4;
		transition: all 200ms !important;
	}
	
	.R-data {
		display: flex;
		padding-left: 10px;
		border-right: 1px solid #EBEBEB;
		flex: 3;
	}
	
	.R-number {
		display: flex;
		flex: 2;
	}
	
	.R-search {
		flex: 1;
	}
	
	.R-s-icon {
		flex: 3;
		/*width: 80px;*/
		/*background: red;*/
		padding-left: 40px;
		height: 72px;
		line-height: 72px;
		text-align: center;
		font-size: 30px;
	}
	
	.R-s-input {
		/*flex: 5;*/
		font-size: 20px;
		font-weight: 800;
		color: #484848;
		border: none;
		outline: none;
	}
	
	.R-d-icon {
		font-size: 20px;
		height: 72px;
		line-height: 72px;
		padding-left: 10px;
		text-align: left;
		font-weight: 800;
	}
	
	.R-d-start {
		margin-left: 20px;
		height: 72px;
		line-height: 72px;
		font-weight: 800;
	}
	
	.R-d-end {
		height: 72px;
		line-height: 72px;
		font-weight: 800;
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
		font-size: 20px;
		text-align: left;
		height: 74px;
		line-height: 74px;
		font-weight: 600;
		border-right: 1px solid #EBEBEB;
	}
	
	.R-s-search {
		width: 70px;
		height: 48px;
		line-height: 48px;
		border-radius: 4px;
		font-size: 16px;
		text-align: center;
		margin: 10px auto;
		color: #FFFFFF;
		background: #FF5A5F !important;
	}
	
	.hot {
		position: relative;
		margin-top: 50px;
		width: 1000px;
		/*overflow: hidden;*/
	}
	
	.ovflew {
		width: 1000px;
		overflow: hidden;
	}
	
	.bourn {
		display: flex;
		width: 110%;
		transition:all 1s;
	}
	
	.B-item {
		width: 128px;
		height: 48px;
		line-height: 48px;
		border: 1px solid #CCCCCC;
		text-align: center;
		font-size: 16px;
		font-weight: 800;
		margin-right: 20px;
		border-radius: 3px;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
	}
	
	.B-item-click {
		width: 128px;
		height: 48px;
		line-height: 48px;
		background: #00848A;
		color: white;
		text-align: center;
		font-size: 16px;
		font-weight: 800;
		margin-right: 20px;
		border-radius: 3px;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
	}
	
	.B-item:hover {
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15) !important;
	}
	
	.gathered {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.B-g-item {
		width: 320px;
		overflow: hidden;
		margin-top: 40px;
		/*border: 1px solid red;*/
		border-radius: 4px;
	}
	
	.B-g-img {
		width: 320px;
		height: 222px;
	}
	
	.B-g-text-1 {
		color: rgb(78, 65, 38);
		font-size: 12px;
		font-weight: 800;
		margin: 0;
	}
	
	.B-g-text-2 {
		color: rgb(78, 65, 38);
		font-weight: 800;
		margin: 0;
	}
	
	.B-g-text-3 {
		color: rgb(78, 65, 38);
		font-size: 12px;
		margin: 0;
	}
	
	.hot-p {
		margin: 0;
	}
	
	.hot-push {
		width: 100%;
	}
	
	.pull {
		margin-top: 50px;
		position: relative;
	}
	
	.pull-svg {
		position: absolute;
		left: 40%;
		top: 50%;
		bottom: 0;
		right: 0;
	}
	
	.pull-btn {
		position: absolute;
		left: 40%;
		top: 80%;
		bottom: 0;
		right: 0;
		width: 150px;
		height: 46px;
		line-height: 46px;
		color: #484848;
		text-align: center;
		font-size: 12px;
		font-weight: 800;
		background: white;
		border-radius: 4px;
	}
	
	.C-flex {
		display: flex;
	}
	
	.C-f-item {
		flex: 1;
		margin-right: 10px;
		/*border: 1px solid red;*/
	}
	
	.C-f-site {
		padding: 0;
		margin: 0;
		font-size: 14px;
		font-weight: 800;
		color: #727272;
	}
	
	.C-f-price {
		margin: 0;
		margin-top: 5px;
		padding: 0;
		font-size: 12px;
		font-weight: 600;
		color: #484848;
	}
	
	.serve {
		display: flex;
		margin-top: 50px;
	}
	
	.C-s-item {
		display: flex;
		margin-right: 40px;
		flex: 3;
	}
	
	.C-s-item img {
		margin-right: 30px;
	}
	
	.C-s-text {
		display: flex;
		flex-direction: column;
	}
	
	.C-s-t-1 {
		font-weight: 800;
		font-size: 15px;
		margin-bottom: 8px;
		line-height: 1;
	}
	
	.C-s-t-2 {
		font-size: 14px;
	}
	
	.T-set {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.T-s-item {
		width: 246px;
		height: 280px;
		margin-top: 40px;
		/*border: 1px solid red;*/
	}
	
	.T-s-i-p1 {
		font-size: 14px;
		font-weight: 800;
	}
	
	.T-s-i-p2 {
		padding-left: 5px;
		font-size: 14px;
	}
	
	.T-s-i-portrait img {
		float: left;
		margin-right: 10px;
	}
	
	.user {
		float: left;
	}
	
	.T-show {
		color: rgb(0, 132, 137);
		font-size: 17px;
		font-weight: 600;
		margin-top: 60px;
	}
	
	.T-s-location {
		position: relative;
	}
	
	.T-s-l-btn {
		position: absolute;
		bottom: 8px;
		right: 8px;
		font-size: 12px;
		font-weight: 800;
		width: 40px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		border-radius: 4px;
		background: white;
	}
	
	.T-s-l-praise {
		position: absolute;
		right: 8px;
		top: 8px;
	}
	
	.amend-img {
		width: 246px;
		height: 160px;
	}
	
	.amend-text-1 {
		color: rgb(118, 118, 118);
		font-size: 12px;
		font-weight: 800;
		margin: 0;
	}
	
	.statement {
		margin-top: 50px;
		padding-bottom: 10px;
		padding-top: 10px;
		padding-left: 24px;
		padding-right: 24px;
		border-width: 0.5px !important;
		border-style: solid !important;
		border-color: rgb(196, 196, 196) !important;
		border-image: initial !important;
		border-radius: 3px !important;
	}
	
	.S-p1 {
		font-size: 14px;
		color: rgb(72, 72, 72);
	}
	
	.S-p2 {
		font-size: 14px;
		color: rgb(118, 118, 118);
		font-style: normal;
		font-size: 14px;
	}
	
	.hr {
		position: relative;
	}
	
	.hr-border {
		position: absolute;
		left: -400px;
		bottom: -40px;
		width: 1650px;
		height: 1px;
		background: rgb(196, 196, 196);
	}
	
	.stern {
		margin-top: 80px;
		display: flex;
	}
	
	.S-item {
		flex: 1;
	}
	
	.S-item-ul {
		font-size: 14px;
		font-weight: 800;
		color: rgb(72, 72, 72);
	}
	
	.S-item-li {
		margin-left: 0;
		margin-bottom: 0;
		margin-right: 0;
		margin-top: 5px;
		/*font-size:;*/
		color: #767676;
	}
	
	.S-item-new {
		display: inline-block;
		width: 35px;
		height: 18px;
		line-height: 18px;
		color: #FFFFFF;
		font-weight: 800;
		text-align: center;
		font-size: 12px;
		border-radius: 4px;
		background: #008489;
	}
	
	.end {
		height: 57px;
		padding-top: 40px;
	}
	
	.vessel {
		padding-top: 20px;
		display: flex;
	}
	
	.V-icon {
		margin-right: 10px;
	}
	
	.V-text {}
	
	.language {
		width: 84px;
		height: 35px;
		line-height: 35px;
		border: 1px solid #CCCCCC;
		border-radius: 4px;
		text-align: center;
		color: rgb(118, 118, 118);
		margin-left: 10px;
	}
	
	.reservation-prev,
	.reservation-next {
		width: 28px;
		height: 28px;
		line-height: 28px;
		display: inline-block;
		cursor: pointer;
		text-align: center;
		/*line-height: 1;*/
		position: relative;
		touch-action: manipulation;
		box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
		border-radius: 50% !important;
		border-width: 2px !important;
		border-style: solid !important;
		border-color: transparent !important;
		background: rgb(255, 255, 255) !important;
	}
	
	.reservation-prev {
		position: absolute;
		left: -17px;
		top: 60px;
		z-index: 10;
	}
	
	.reservation-next {
		position: absolute;
		right: -17px;
		top: 60px;
		z-index: 10;
	}
</style>