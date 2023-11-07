import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Home from "./page/Home";
type Props = {};

export default function App({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
