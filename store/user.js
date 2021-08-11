export const state = {
  isDev: false
}

export const getters = {
  isDev: (state) => {
    return state.isDev ? state.isDev : localStorage.getItem('isDev')
  }
}
  
export const mutations = {
  setIsDev (state, isDev) {
    state.isDev = isDev
    localStorage.setItem('isDev', isDev)
  }
}