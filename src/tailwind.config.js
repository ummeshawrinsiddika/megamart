/** @type {import('tailwindcss').Config} */
export default {
  // ১. content: এখানে বলে দিতে হয় কোন কোন ফাইলে আমরা টেইলউইন্ড ব্যবহার করব।
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // ২. colors: এখানে আমরা মেগামার্টের নিজস্ব কালার সেট করছি।
      colors: {
        brandBlue: "#008ecc", // এখন তুমি ক্লাসে 'text-brandBlue' বা 'bg-brandBlue' ব্যবহার করতে পারবে।
        darkBg: "#212121", // ব্যানারের ডার্ক কালার
      },
      // ৩. spacing বা অন্য কিছু চাইলে এখানে অ্যাড করা যায়।
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },

  plugins: [],
};
