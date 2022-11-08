const generalModule = {
  state() {
    return {
      themeMode: "light",
    };
  },
  mutations: {
    changeThemeMode(state, payload) {
      state.themeMode = payload.newMode;
    },
  },
  getters: {
    currentThemeMode(state) {
      return state.themeMode;
    },
  },
};

export default generalModule;
