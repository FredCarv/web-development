import Banner from "../../components/banner/banner";
import Mortes from "../../components/mortes/mortes";
import Epidemia from "../../components/epidemia/epidemia";
import Contato from "../contato/contato";

export default function home() {
  return (
    <main>
      <Banner />
      <Mortes />
      <Epidemia />
      <Contato />
    </main>
  );
}
