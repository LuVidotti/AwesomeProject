import { createContext, useState, useEffect } from "react";
import { collection, initializeFirestore, addDoc, query, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { app } from "../firebase/config";

export const PesquisaContext = createContext();

export const PesquisaProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [mensagemErroNome, setMensagemErroNome] = useState('');
    const [mensagemErroData, setMensagemErroData] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");
    const [listaPesquisas, setListaPesquisas] = useState([]);
    

    const db = initializeFirestore(app, {experimentalForceLongPolling: true});

    const pesquisaCollection = collection(db, "pesquisas");

    function modificarPesquisa(id, nome, data) {
        const pesquisaRef = doc(db, "pesquisas", id);

        updateDoc(pesquisaRef, {
            nome:nome,
            data:data
        })
    }

    useEffect(() => {
        const q = query(pesquisaCollection);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const pesquisas = [];
            snapshot.forEach((doc) => {
                pesquisas.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setListaPesquisas(pesquisas);
        })
    }, []);

    function cadastrar() {
        if(nome === "" || data === "") {
            setMensagemErroData("Preencha a data");
            setMensagemErroNome("Preencha no nome da pesquisa");
            return
        }

        const docPesquisa = {
            nome: nome,
            data: data
        }

        addDoc(pesquisaCollection, docPesquisa).then((pesquisaCriada) => {
            setMensagemErroData("");
            setMensagemErroNome("");
            setMensagemErro("");
            console.log(pesquisaCriada);
            setMensagemSucesso("Pesquisa adicionada com sucesso!!!");
        }).catch((erro) => {
            setMensagemSucesso("");
            setMensagemErro("Erro ao adicionar pesquisa");
        })
    }

    return (
        <PesquisaContext.Provider value={{
            setNome,
            nome,
            data,
            setData,
            mensagemErroNome,
            mensagemErroData,
            mensagemSucesso,
            mensagemErro,
            cadastrar,
            listaPesquisas,
            modificarPesquisa
        }}>{children}</PesquisaContext.Provider>
    )
}