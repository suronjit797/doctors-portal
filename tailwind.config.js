module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
}
