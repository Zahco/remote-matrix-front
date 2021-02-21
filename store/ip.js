export const state = () => ({
  ip: null,
})
  
export const getters = {
  getIp: (state) => {
    return state.ip
  }
}

export const mutations = {
  setIp (state, ip) {
    state.ip = ip
  }
}