module.exports = {
  mode: "jit",
  purge: [
    "./src/Components/Utilities/Form.jsx",
    "./src/Components/Utilities/PhoneLogin.jsx",
    "./src/Components/Start.jsx",
    "./src/Components/Utilities/CodeConfirm.jsx",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
