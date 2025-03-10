import * as React from "react";
import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from "./UpdateABook.module.css";
import {ChangeEvent, useEffect, useState} from "react";
import {Book} from "../../types/Types";
import CallAPI from "../../hooks/CallAPI";
import {sortedByAuthor, sortedByTitle, sortedByTitleByIsRead} from "../../scripts/utilities";
import Pagination from "../../components/Pagination/Pagination";
// @ts-ignore
import UpdateIcon from "../../assets/icons/ico-update.png";

const UpdateABook = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState<Book[]>([]);
  const [dataAllBooks, setDataAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(false);

  const pageSize = 10;
  const apiMethod = "GET";

  useEffect(() => {
      CallAPI({url:`http://localhost:8080/books?page=${page}&size=${pageSize}`, apiMethod, setData, setTotalPages, setLoading, setError});
      CallAPI({url:"http://localhost:8080/books/all", apiMethod, setDataAllBooks, setLoading, setError});
    }, [page]);


  let sortedDatas = filter ? sortedByTitle(data) : sortedByTitleByIsRead(data);
  const sortedAllBooksData = sortedByAuthor(dataAllBooks);

  const handleFilterByAuthor = (event: ChangeEvent<HTMLSelectElement>) =>  {
    const authorSelected = event.target.value;
    const url= `http://localhost:8080/books/filter/${authorSelected.replace(" ", "%20")}`;

    CallAPI({url, apiMethod, setData, setLoading, setError});
    setFilter(true);
  }

  const handleReinitFilter = () => {
    CallAPI({url:`http://localhost:8080/books?page=${page}&size=${pageSize}`, apiMethod, setData, setTotalPages, setLoading, setError});
    setFilter(false);
    document.getElementById('author-select')["value"] = "default";
  }

  return (
        <>
            <Menu />
            <main className={styles["form-container"]}>
                <h1>Modifier un livre </h1>
                { loading && <div> Loading...</div> }
                { error && <div> Une erreur est survenue...</div> }
                { !filter && <Pagination
                    actualPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />}
                <div className={styles.container}>
                  <div className={styles.filter}>
                    <label htmlFor="author-select">Filtrer par auteur:</label>
                    <select name="authors" id="author-select" onChange={handleFilterByAuthor}>
                        <option value={"default"}>Sélectionner un auteur</option>
                        {sortedAllBooksData.map((author:string, index:number) => (
                          <option key={index}>{author}</option>
                        ))}
                    </select>
                    <span className={styles.reinit}><a href="#" onClick={handleReinitFilter}>Effacer le filtre</a></span>
                  </div>
                  <table className={styles["book-table"]}>
                    <tbody>
                      {sortedDatas.map((data:Book) => (
                        <tr key={data.title}>
                          <td className={styles.book}><img src={UpdateIcon} id="icon_update" alt="Modifier les élements du livre" title="Modifier" onClick={() =>  document.location.href=`/update-book/${data.id}`}/></td>
                          <td className={styles.book}><span className={styles["book-title"]}>{data.title}</span><br/>{data.author}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              { !filter && <Pagination
                  actualPage={page}
                  setPage={setPage}
                  totalPages={totalPages}
              />}
            </main>
        </>
    )
}

export default UpdateABook;