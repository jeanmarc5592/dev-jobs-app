const generalModule = {
  state() {
    return {
      screenDimensions: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },
      themeMode: "light",
    };
  },
  mutations: {
    changeThemeMode(state, payload) {
      state.themeMode = payload.newMode;
    },
    updateDimensions(state) {
      state.screenDimensions.width = document.documentElement.clientWidth;
      state.screenDimensions.height = document.documentElement.clientHeight;
    },
  },
  getters: {
    currentThemeMode(state) {
      return state.themeMode;
    },
    currentScreenDimensions(state) {
      return state.screenDimensions;
    },
  },
};

export default generalModule;
