import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#17202b", paper: "#f8fafc", line: "#e7ebf0", brand: "#2563eb" }, boxShadow: { soft: "0 8px 30px rgba(15,23,42,.06)" } } }, plugins: [] } satisfies Config;
