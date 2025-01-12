import { getAllProdutos } from "@/fakeDb/produto";
import styles from "./produto.module.css";
import Link from "../../../node_modules/next/link";

export default function Home() {
  const produtos = getAllProdutos();
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((prod) => (
          <li key={prod.id} className={styles.listaProdutos}><Link href={`/produto/${prod.id}`}>{prod.nome}</Link></li>
        ))}
      </ul>
    </div>
  );
}
