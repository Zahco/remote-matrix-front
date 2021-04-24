  
export const getters = {
  getIp: (state) => {
    return localStorage.getItem('remote-ip')
  }
}

export const mutations = {
  setIp (state, ip) {
    localStorage.setItem('remote-ip', ip)
  }
}