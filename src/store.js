import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from "axios"
export default new Vuex.Store({
	state: {
		data: {}
	},
	mutations: {
		getdata(state, res) {
			state.data = res
			console.log(state.data)
		}
	},
	actions: {
		getdata(context) {
			axios.get('/static/travel.json')
				.then((res) => {
					if (res.data.ret && res.data.data) {
						context.commit('getdata', res.data.data)
					}
					
				})
		}
	}
})