import { createContext, useState, useEffect } from "react";
import { collection, initializeFirestore, addDoc, query, onSnapshot, updateDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
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
    const [notaPessimo, setNotaPessimo] = useState(0);
    const [notaRuim, setNotaRuim] = useState(0);
    const [notaNeutro, setNotaNeutro] = useState(0);
    const [notaBom, setNotaBom] = useState(0);
    const [notaExcelente, setNotaExcelente] = useState(0);
    
    const db = initializeFirestore(app, {experimentalForceLongPolling: true});

    const pesquisaCollection = collection(db, "pesquisas");

    function recuperarPesquisa(id) {
        const pesquisaRef = doc(db, "pesquisas", id);

        getDoc(pesquisaRef).then((pesquisa) => {
            setNotaPessimo(pesquisa.data().notaPessimo);
            setNotaRuim(pesquisa.data().notaRuim);
            setNotaNeutro(pesquisa.data().notaNeutro);
            setNotaBom(pesquisa.data().notaBom);
            setNotaExcelente(pesquisa.data().notaExcelente);
        }).catch((erro) => {
            console.log("Erro ao recuperar pesquisa "+erro)
        })
    }

    function votarPessimo(id) {
        const pesquisaRef = doc(db, "pesquisas", id);

        getDoc(pesquisaRef).then((pesquisa) => {
            const notaAtual = pesquisa.data().notaPessimo;
            updateDoc(pesquisaRef, {
                notaPessimo: notaAtual + 1
            })
        })
    }

    function votarRuim(id) {
        const pesquisaRef = doc(db, "pesquisas", id);

        getDoc(pesquisaRef).then((pesquisa) => {
            const notaAtual = pesquisa.data().notaRuim;
            updateDoc(pesquisaRef, {
                notaRuim: notaAtual + 1
            })
        })
    }

    function votarNeutro(id) {
        const pesquisaRef = doc(db, "pesquisas", id);

        getDoc(pesquisaRef).then((pesquisa) => {
            const notaAtual = pesquisa.data().notaNeutro;
            updateDoc(pesquisaRef, {
                notaNeutro: notaAtual + 1
            })
        })
    }

    function votarBom(id) {
        const pesquisaRef = doc(db, "pesquisas", id);

        getDoc(pesquisaRef).then((pesquisa) => {
            const notaAtual = pesquisa.data().notaBom;
            updateDoc(pesquisaRef, {
                notaBom: notaAtual + 1
            })
        })
    }

    function votarExcelente(id) {
        const pesquisaRef = doc(db, "pesquisas", id);

        getDoc(pesquisaRef).then((pesquisa) => {
            const notaAtual = pesquisa.data().notaExcelente;
            updateDoc(pesquisaRef, {
                notaExcelente: notaAtual + 1
            })
        })
    }

    function deletarPesquisa(id, callback) {
        deleteDoc(doc(db, "pesquisas", id));
        callback();
    }

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
            data: data,
            notaPessimo: 0,
            notaRuim: 0,
            notaNeutro: 0,
            notaBom: 0,
            notaExcelente: 0
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
            modificarPesquisa,
            deletarPesquisa,
            votarPessimo,
            votarRuim,
            votarNeutro,
            votarBom,
            votarExcelente,
            recuperarPesquisa,
            notaPessimo,
            notaRuim,
            notaNeutro,
            notaBom,
            notaExcelente
        }}>{children}</PesquisaContext.Provider>
    )
}