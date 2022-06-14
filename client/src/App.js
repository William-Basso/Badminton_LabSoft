
import React, { useState } from 'react';
import './index.css';
import './App.css';
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from "react-redux";
import { updateParameters, countFora, reset } from "./model/quadra";
import { updateJogador } from './model/jogador';
import { Form } from "react-bootstrap";
import axios from 'axios';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import ResponsiveTable from './model/tabela'
import { useEffect } from 'react';


function App() {
  const [page, setPage] = useState(0);

  const [disable, setDisable] = useState(true);

  const [showFim, setShowFim] = useState(false);
  const [showModal, set_showModal] = useState(false)
  const [areaSelecionada, set_areaSelecionada] = useState(0)
  const [textInput, setTextInput] = useState("a")

  const dispatch = useDispatch();
  const jogador = useSelector((state) => state.jogador);
  const quadra = useSelector((state) => state.quadra);

  // Modal de confirmação de finalização da partida
  const handleShowFim = () => setShowFim(true);
  const handleCloseFim = () => setShowFim(false);

  // Finaliza Partida
  const handleFinalizar = () => {
    //Salvar dados no banco de dados
    axios.get('/ultimaPartida').then(resp => {
      let proxPartida = (parseInt(resp.data, 10) + 1)
      console.log("a proxPartida é: " + proxPartida)
      axios.post('/savePartida', {
        pk_partida: proxPartida,
        jogador: jogador.nome,
        totalpontos: quadra.totalPontos,
      })
        .then(function (response) {
          console.log(response);
          console.log("salvou a partida")
          axios.post('/saveFora', {
            partida: proxPartida,
            saque: quadra.fora.saque,
            forehand: quadra.fora.forehand,
            backhand: quadra.fora.backhand,
            clear: quadra.fora.clear,
            drop_: quadra.fora.drop,
            smash: quadra.fora.smash,
            drive: quadra.fora.drive,
            lob: quadra.fora.lob,
            netshot: quadra.fora.netShot,
            netkill: quadra.fora.netKill,
            netlift: quadra.fora.netLift,
            pontoinvalido: quadra.fora.contador
          })
            .then(function (response) {
              console.log(response);
              console.log("salvou fora da quadra")
              for (let i = 0; i < quadra.area.length; i++) {
                console.log("entrou no loop for: " + i)
                axios.post('/saveQuadra', {
                  partida: proxPartida,
                  area: i + 1,
                  saque: quadra.area[i].saque,
                  forehand: quadra.area[i].forehand,
                  backhand: quadra.area[i].backhand,
                  clear: quadra.area[i].clear,
                  drop_: quadra.area[i].drop,
                  smash: quadra.area[i].smash,
                  drive: quadra.area[i].drive,
                  lob: quadra.area[i].lob,
                  netshot: quadra.area[i].netShot,
                  netkill: quadra.area[i].netKill,
                  netlift: quadra.area[i].netLift,
                  pontovalido: quadra.area[i].ponto
                })
                  .then(function (response) {
                    console.log(response);
                    console.log("salvou a quadra")
                    dispatch(reset())
                    dispatch(updateJogador({ nome: "" }))
                    setTextInput("")
                    handleCloseFim()
                    setDisable(true)
                    setShowTable(true)
                    setPage(0)

                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }

  // Leitura de texto do Modal de Novo Jogo

  const handleTextInput = (text) => {
    setTextInput(text)
    if (text !== "" && text !== null) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  // Iniciar nova partida

  const handleIniciar = () => {
    dispatch(updateJogador({ nome: textInput }))
    setPage(1)
  };

  // Cancelar Partida
  const handleCancelar = () => {
    dispatch(reset())
    dispatch(updateJogador({ nome: "" }))
    setTextInput("")
    setDisable(true)
    setPage(0)
  }

  // Area
  const [nomeArea, set_nomeArea] = useState('')
  const handleArea = (numArea) => {
    set_areaSelecionada(numArea)
    if (numArea === 6) {
      set_nomeArea('Fora da Quadra')
    }
    else {
      let aux = numArea + 1
      set_nomeArea('Área ' + aux)
    }
    set_showModal(true)
  }

  // Seleciona o tipo de jogada na area
  const handlePlay = (areaSel, tipo) => {
    if (areaSelecionada === 6) {
      dispatch(countFora({ area: areaSel, tipo }))
      set_showModal(false)
    }
    else {
      dispatch(updateParameters({ area: areaSel, tipo }))
      set_showModal(false)
    }
  }
  // const arr = [{ pk_partida: 0, jogador: "", totalpontos: 0 }]
  const [partidasRecentes, setPartidasRecentes] = useState([])

  const [showTable, setShowTable] = useState(true)
  useEffect(() => {
    axios.get('/partidas').then(resp => {
      setPartidasRecentes(resp.data)
    })
    setShowTable(false)
  }, [showTable])


  switch (page) {
    // Página inicial
    default: return (
      <React.Fragment>
        <div id="header">
          <div id="esq">
            <h4 id="header-title">Badminton Scout</h4>
          </div>
          <div id="esq">
          </div>
          <Button id="logout-btn" variant="outline-sedisableary">
            <BoxArrowLeft size={25} className="icon" />
            Logout
          </Button>
        </div>
        <div id="body">
          <div id="content">
            <div id="wrapNovoJogo">
              <div id='title'>Novo Jogo</div>
              <div id="wrapForm1">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome do Jogador:</Form.Label>
                    <Form.Control
                      onChange={(e) => handleTextInput(e.target.value)}
                      type="text"
                      placeholder="Jogador"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div id="container">
              <div id="esq">
                <Button variant="primary" onClick={handleIniciar} disabled={disable} >
                  Iniciar
                </Button>
              </div>
              {/* <div id="dir">
                <Button id="mostrarPartidas" variant="primary" onClick={mostrarPartidas}>
                  Mostrar Partidas
                </Button>
              </div> */}
            </div>

            <div id="wrapPartidasRecentes">
              <div id='title'>Partidas Recentes</div>
              <div id="wrapForm">
                <ResponsiveTable itens={partidasRecentes} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    )

    case 1: return (
      <React.Fragment>
        <div id="principal">
          <div id="cab">
            <h4 id="l1_c1" className='centerTitle'>Geral</h4>
            <h4 id="l1_c2" className='centerTitle'>Fora da Quadra</h4>
            <div id="l2_c1">
              <p>Nome Jogador/Equipe: {jogador.nome}</p>
              <p>Total de Pontos: {quadra.totalPontos}</p>
              <p>Fora da Quadra: {quadra.fora.contador}</p>
            </div>
            <div id="l2_c2">
              <div id="colum1">
                <p>Saque: {quadra.fora.saque}</p>
                <p>Forehand: {quadra.fora.forehand}</p>
                <p>Backhand: {quadra.fora.backhand}</p>
              </div>
              <div id="colum2">
                <p>Clear: {quadra.fora.clear}</p>
                <p>Drop: {quadra.fora.drop}</p>
                <p>Smash: {quadra.fora.smash}</p>
              </div>
              <div id="colum3">
                <p>Drive: {quadra.fora.drive}</p>
                <p>Lob: {quadra.fora.lob}</p>
                <p>Net Shot: {quadra.fora.netShot}</p>
              </div>
              <div id="colum4">
                <p>Net Kill: {quadra.fora.netKill}</p>
                <p>Net Lift: {quadra.fora.netLift}</p>
              </div>
            </div>
            <div id="l2_c3">
              <Button variant="danger" size="lg" as="input" type="button" onClick={() => handleArea(6)} value='+1 Fora da Quadra' />
            </div>
          </div>

          <div id="area">
            <div id="wrapArea">
              <div id="area_1" className='area' onClick={() => handleArea(0)}>
                <h2 className='titulo'>Area 1</h2>
                <div className="wrapDados">
                  <div id="dados" className="dados">
                    <p>Saque:     {quadra.area[0].saque}</p>
                    <p>Forehand:  {quadra.area[0].forehand}</p>
                    <p>Backhand:  {quadra.area[0].backhand}</p>
                    <p>Clear:     {quadra.area[0].clear}</p>
                    <p>Drop:      {quadra.area[0].drop}</p>
                    <p>Smash:     {quadra.area[0].smash}</p>
                    <p>Drive:     {quadra.area[0].drive}</p>
                    <p>Lob:       {quadra.area[0].lob}</p>
                    <p>Net Shot:  {quadra.area[0].netShot}</p>
                    <p>Net Kill:  {quadra.area[0].netKill}</p>
                    <p>Net Lift:  {quadra.area[0].netLift}</p>
                    <p>Ponto:     {quadra.area[0].ponto}</p>
                  </div>
                </div>
              </div>
              <div id="area_2" className='area' onClick={() => handleArea(1)}>
                <h2 className='titulo'>Area 2</h2>
                <div className="wrapDados">
                  <div id="dados" className="dados">
                    <p>Saque:     {quadra.area[1].saque}</p>
                    <p>Forehand:  {quadra.area[1].forehand}</p>
                    <p>Backhand:  {quadra.area[1].backhand}</p>
                    <p>Clear:     {quadra.area[1].clear}</p>
                    <p>Drop:      {quadra.area[1].drop}</p>
                    <p>Smash:     {quadra.area[1].smash}</p>
                    <p>Drive:     {quadra.area[1].drive}</p>
                    <p>Lob:       {quadra.area[1].lob}</p>
                    <p>Net Shot:  {quadra.area[1].netShot}</p>
                    <p>Net Kill:  {quadra.area[1].netKill}</p>
                    <p>Net Lift:  {quadra.area[1].netLift}</p>
                    <p>Ponto:     {quadra.area[1].ponto}</p>
                  </div>
                </div>
              </div>
              <div id="area_3" className='area' onClick={() => handleArea(2)}>
                <h2 className="titulo">Area 3</h2>
                <div className="wrapDados">
                  <div id="dados" className="dados">
                    <p>Saque:     {quadra.area[2].saque}</p>
                    <p>Forehand:  {quadra.area[2].forehand}</p>
                    <p>Backhand:  {quadra.area[2].backhand}</p>
                    <p>Clear:     {quadra.area[2].clear}</p>
                    <p>Drop:      {quadra.area[2].drop}</p>
                    <p>Smash:     {quadra.area[2].smash}</p>
                    <p>Drive:     {quadra.area[2].drive}</p>
                    <p>Lob:       {quadra.area[2].lob}</p>
                    <p>Net Shot:  {quadra.area[2].netShot}</p>
                    <p>Net Kill:  {quadra.area[2].netKill}</p>
                    <p>Net Lift:  {quadra.area[2].netLift}</p>
                    <p>Ponto:     {quadra.area[2].ponto}</p>
                  </div>
                </div>
              </div>
              <div id="area_4" className='area' onClick={() => handleArea(3)}>
                <h2 className="titulo">Area 4</h2>
                <div className="wrapDados">
                  <div id="dados" className="dados">
                    <p>Saque:     {quadra.area[3].saque}</p>
                    <p>Forehand:  {quadra.area[3].forehand}</p>
                    <p>Backhand:  {quadra.area[3].backhand}</p>
                    <p>Clear:     {quadra.area[3].clear}</p>
                    <p>Drop:      {quadra.area[3].drop}</p>
                    <p>Smash:     {quadra.area[3].smash}</p>
                    <p>Drive:     {quadra.area[3].drive}</p>
                    <p>Lob:       {quadra.area[3].lob}</p>
                    <p>Net Shot:  {quadra.area[3].netShot}</p>
                    <p>Net Kill:  {quadra.area[3].netKill}</p>
                    <p>Net Lift:  {quadra.area[3].netLift}</p>
                    <p>Ponto:     {quadra.area[3].ponto}</p>
                  </div>
                </div>
              </div>
              <div id="area_5" className='area' onClick={() => handleArea(4)}>
                <h2 className="titulo">Area 5</h2>
                <div className="wrapDados">
                  <div id="dados" className="dados">
                    <p>Saque:     {quadra.area[4].saque}</p>
                    <p>Forehand:  {quadra.area[4].forehand}</p>
                    <p>Backhand:  {quadra.area[4].backhand}</p>
                    <p>Clear:     {quadra.area[4].clear}</p>
                    <p>Drop:      {quadra.area[4].drop}</p>
                    <p>Smash:     {quadra.area[4].smash}</p>
                    <p>Drive:     {quadra.area[4].drive}</p>
                    <p>Lob:       {quadra.area[4].lob}</p>
                    <p>Net Shot:  {quadra.area[4].netShot}</p>
                    <p>Net Kill:  {quadra.area[4].netKill}</p>
                    <p>Net Lift:  {quadra.area[4].netLift}</p>
                    <p>Ponto:     {quadra.area[4].ponto}</p>
                  </div>
                </div>
              </div>
              <div id="area_6" className='area' onClick={() => handleArea(5)}>
                <h2 className="titulo">Area 6</h2>
                <div className="wrapDados">
                  <div id="dados" className="dados">
                    <p>Saque:     {quadra.area[5].saque}</p>
                    <p>Forehand:  {quadra.area[5].forehand}</p>
                    <p>Backhand:  {quadra.area[5].backhand}</p>
                    <p>Clear:     {quadra.area[5].clear}</p>
                    <p>Drop:      {quadra.area[5].drop}</p>
                    <p>Smash:     {quadra.area[5].smash}</p>
                    <p>Drive:     {quadra.area[5].drive}</p>
                    <p>Lob:       {quadra.area[5].lob}</p>
                    <p>Net Shot:  {quadra.area[5].netShot}</p>
                    <p>Net Kill:  {quadra.area[5].netKill}</p>
                    <p>Net Lift:  {quadra.area[5].netLift}</p>
                    <p>Ponto:     {quadra.area[5].ponto}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="rodape">
            <div id="esq">
              <Button className='left-btn' variant="secondary" onClick={handleCancelar}>
                Cancelar
              </Button>
            </div>
            <div id="dir">
              <Button variant="success" onClick={handleShowFim}>
                Salvar
              </Button>
            </div>
          </div>

        </div>

        {/* SELECIONAR JOGADA */}
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={() => set_showModal(false)}
        >
          <Modal.Header id="modalHeader">
            <h2>{nomeArea}</h2>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'saque')} value="Saque" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'forehand')} value="Forehand" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'backhand')} value="Backhand" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'clear')} value="Clear" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'drop')} value="Drop" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'smash')} value="Smash" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'drive')} value="Drive" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'lob')} value="Lob" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'netShot')} value="Net Shot" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'netKill')} value="Net Kill" />
            <Button className="btnModal" as="input" type="button" onClick={() => handlePlay(areaSelecionada, 'netLift')} value="Net Lift" />
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>

        {/* CONFIRMAÇÃO DA FINALIZAÇÃO DA PARTIDA */}
        <Modal show={showFim} onHide={handleCloseFim}>
          <Modal.Header closeButton>
            <Modal.Title>Finalizar Partida</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tem certeza que deseja finalizar esta partida?</Modal.Body>
          <Modal.Footer>
            <Button variant="sedisableary" onClick={handleCloseFim}>
              Não
            </Button>
            <Button variant="primary" onClick={handleFinalizar}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment >
    );
    case 2: return (
      <React.Fragment>
        Tela de Relatorios
      </React.Fragment>
    )
  }

}


export default App;

