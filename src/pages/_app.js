import "@/styles/globals.css";
import Sidebar from "../../components/Sidebar";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Sidebar />
      <div className="rightside">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
